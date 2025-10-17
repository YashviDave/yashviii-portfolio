import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
  
<section id="contact" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-8 text-center">
          <div className="space-y-6">
            {/* Email */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:yashvipdave@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                yashvipdave@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-medium">Phone</h4>
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
           {/* Location */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-medium">Location</h4>
              <span className="text-muted-foreground">
                Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-medium">LinkedIn</h4>
              <a
                href="https://github.com/YashviDave"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                YashviDave
              </a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};


