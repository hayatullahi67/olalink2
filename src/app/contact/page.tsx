import ContactForm from "./ContactForm";
import Map from "./Map";
import { Mail, Phone, Pin, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@olalink.com",
    href: "mailto:contact@olalink.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/1234567890",
  },
  {
    icon: Pin,
    title: "Address",
    value: "123 Tech Avenue, Silicon Valley, CA 94043, USA",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services or want to start a project, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full mt-1">
                      <detail.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      {detail.href ? (
                        <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-primary mb-8">Find Us Here</h2>
           <Map />
        </div>
      </section>
    </div>
  );
}
