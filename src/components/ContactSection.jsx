import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12 justify-center container mx-auto max-w-5xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left"> Email</h4>
                  <a
                    href="mailto:yashvipdave@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yashvipdave@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-left"> Phone</h4>
                  <a
                    href="tel:+919909956531"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+91) 9909956531
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-left"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Ahmedabad, Gujarat, India.
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left"> LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/yashvi-dave-9b0bb0329/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Yashvi Dave
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
