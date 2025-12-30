import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ContactNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!formData.ContactNumber.trim() || formData.ContactNumber.length < 10) {
      toast.error("Please enter a valid contact number");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mkonkkzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.ContactNumber,
          message: formData.message,
          _subject: "New Contact Form Submission",
        }),
      });

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          ContactNumber: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  const copyNumber = () => {
    navigator.clipboard.writeText("+917030898044");
    toast.success("Phone number copied!");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's talk about your next project
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help bring your ideas to life. Choose how you'd like
              to connect with us.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <a
            href="https://wa.me/917030898044"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-400 p-8 hover:border-emerald-500 transition-all duration-300"
          >
            <div className="mb-4">
              <svg className="w-12 h-12" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get instant responses to your queries
            </p>
            <div className="text-sm text-emerald-600 group-hover:translate-x-2 transition-transform inline-block">
              Start chatting →
            </div>
          </a>

          <a
            href="mailto:goeosdynamic@gmail.com"
            className="group border border-gray-400 p-8 hover:border-emerald-500 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">Email</h3>
            <p className="text-sm text-gray-600 mb-4">
              Send us a detailed message
            </p>
            <div className="text-sm text-emerald-600 group-hover:translate-x-2 transition-transform inline-block">
              Write to us →
            </div>
          </a>

          <button
            onClick={copyNumber}
            className="group border border-gray-400 p-8 hover:border-emerald-500 transition-all duration-300 text-left"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-4">+91 70308 98044</p>
            <div className="text-sm text-emerald-600 group-hover:translate-x-2 transition-transform inline-block">
              Click to copy →
            </div>
          </button>
        </div>

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-3">
                Send us a message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-900 mb-2">
                  Contact Number *
                </label>
                <input
                  type="text"
                  name="ContactNumber"
                  value={formData.ContactNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border border-gray-400 p-8">
              <h3 className="text-xl font-light text-gray-900 mb-6">
                Visit Us
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="text-gray-900">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 p-8">
              <h3 className="text-xl font-light text-gray-900 mb-4">
                Why Work With Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-gray-600">
                    Expert team with proven track record
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-gray-600">
                    Tailored solutions for your needs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-gray-600">
                    Transparent communication throughout
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-400 p-8">
              <h3 className="text-xl font-light text-gray-900 mb-3">
                Response Time
              </h3>
              <p className="text-sm text-gray-600">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call or WhatsApp us
                directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Contact;
