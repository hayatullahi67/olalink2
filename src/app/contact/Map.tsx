'use client';

import { useState, useEffect, useTransition } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { interactiveMapTool, type InteractiveMapToolOutput } from '@/ai/flows/interactive-map-tool';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  address: z.string().min(10, { message: 'Please enter a more specific address.' }),
});

const defaultAddress = "123 Tech Avenue, Silicon Valley, CA 94043, USA";

export default function Map() {
  const [mapResult, setMapResult] = useState<InteractiveMapToolOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: defaultAddress,
    },
  });

  const generateMap = async (address: string) => {
    setIsLoading(true);
    startTransition(async () => {
      try {
        const result = await interactiveMapTool({ address });
        if (result.mapUrl.startsWith('Error:')) {
            toast({
              variant: 'destructive',
              title: 'Map Generation Failed',
              description: result.mapUrl,
            });
            // Keep the old map if the new one fails
        } else {
            setMapResult(result);
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'An unexpected error occurred',
          description: 'Could not generate the map. Please try again later.',
        });
      } finally {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    generateMap(defaultAddress);
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await generateMap(values.address);
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4 flex flex-col sm:flex-row gap-4 items-end">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Enter an address to view on map</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 1600 Amphitheatre Parkway, Mountain View, CA" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending || isLoading} className="w-full sm:w-auto">
              {isPending || isLoading ? 'Loading...' : 'Update Map'}
            </Button>
          </form>
        </Form>
        
        <div className="mt-4 aspect-video w-full rounded-md overflow-hidden border">
          {isLoading ? (
            <Skeleton className="h-full w-full" />
          ) : mapResult && !mapResult.mapUrl.startsWith('Error:') ? (
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapResult.mapUrl}
            ></iframe>
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center">
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                    Could not load map. Please try a different address.
                    </AlertDescription>
                </Alert>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
