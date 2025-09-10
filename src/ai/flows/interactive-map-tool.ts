'use server';

/**
 * @fileOverview Implements a Genkit flow for displaying an interactive map on the Contact Us page.
 *
 * - interactiveMapTool - A function that handles the process of generating the interactive map.
 * - InteractiveMapToolInput - The input type for the interactiveMapTool function.
 * - InteractiveMapToolOutput - The return type for the interactiveMapTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveMapToolInputSchema = z.object({
  address: z
    .string()
    .describe('The address of the company.'),
});

export type InteractiveMapToolInput = z.infer<typeof InteractiveMapToolInputSchema>;

const InteractiveMapToolOutputSchema = z.object({
  mapUrl: z.string().describe('The URL of the interactive map.'),
});

export type InteractiveMapToolOutput = z.infer<typeof InteractiveMapToolOutputSchema>;

const interactiveMapToolPrompt = ai.definePrompt({
  name: 'interactiveMapToolPrompt',
  input: {schema: InteractiveMapToolInputSchema},
  output: {schema: InteractiveMapToolOutputSchema},
  prompt: `You are an expert at generating map URLs for embedding in a website.

  Given the following address, generate a Google Maps URL that can be used to embed an interactive map:

  Address: {{{address}}}

  If the address is invalid, respond with an error message indicating that the address could not be found.
  Otherwise, return the map URL.
  `,
});


const interactiveMapToolFlow = ai.defineFlow(
  {
    name: 'interactiveMapToolFlow',
    inputSchema: InteractiveMapToolInputSchema,
    outputSchema: InteractiveMapToolOutputSchema,
  },
  async input => {
    try {
      const {output} = await interactiveMapToolPrompt(input);
      if (!output || !output.mapUrl) {
        throw new Error('Failed to generate map URL.');
      }
      return output;
    } catch (e: any) {
      console.error('Error generating map:', e);
      // Return a default map URL or an error message as needed
      return {mapUrl: 'Error: Could not generate map for the provided address.'};
    }
  }
);

export async function interactiveMapTool(input: InteractiveMapToolInput): Promise<InteractiveMapToolOutput> {
  return interactiveMapToolFlow(input);
}
