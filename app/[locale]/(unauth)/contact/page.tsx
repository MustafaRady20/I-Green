"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
  projectType: string;
  images: FileList; // Change to accept multiple files
};

export default function ContactPage() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const botToken = "8145319098:AAEYyAWVX0nIpVIYWKg4-6hGRNBoXjLkN6o";
    const chatId = "1613875614";
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    const message = `
      *New Order 🌿 Bring nature in your home 🌱*\n
      *Hello I-Green, I'm ${data.fullName} and I want to get free Quote*\n
      *Email:* ${data.email}\n
      *Address:* ${data.address}\n
      *Description:* ${data.description}\n
      *Project Type:* ${data.projectType}\n
      *Contact:* [+2${data.phoneNumber}](tel:${data.phoneNumber})
    `;

    try {
      // Loop through each image and send it to Telegram
      for (let i = 0; i < data.images.length; i++) {
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("photo", data.images[i]); // Append the current image file
        formData.append("caption", i === 0 ? message : ""); // Add the message only to the first image
        formData.append("parse_mode", "Markdown"); // Enable Markdown formatting

        // Send the image and message to Telegram
        const response = await fetch(telegramUrl, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Telegram API Error: ${response.status} - ${errorText}`
          );
        }
      }

      // Handle success
      alert("Message and images sent successfully!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            layout="fill"
            src="/hero.jpg"
            alt="Plant terrarium on desk"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r w-full from-black/40 to-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-end h-[85%] px-16 max-w-6xl mx-auto"
        >
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Contact-us
          </h1>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-darkgreen mb-8">
                Bring nature
                <br />
                into your home
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 max-w-lg mx-auto bg-white p-6 shadow-md rounded-md"
              >
                <h2 className="text-3xl font-bold text-green-800 text-center">
                  Bring nature in your home
                </h2>

                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      {...register("fullName", {
                        required: "Name is required",
                      })}
                      id="fullName"
                      className="border border-gray-300 p-2 rounded w-full"
                      placeholder="Your name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      id="email"
                      className="border border-gray-300 p-2 rounded w-full"
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address and Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                      id="phoneNumber"
                      className="border border-gray-300 p-2 rounded w-full"
                      placeholder="Your phone"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      {...register("address", {
                        required: "Address is required",
                      })}
                      id="address"
                      className="border border-gray-300 p-2 rounded w-full"
                      placeholder="Your address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type Field */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Type
                  </label>
                  <select
                    {...register("projectType", {
                      required: "Project type is required",
                    })}
                    id="projectType"
                    className="border border-gray-300 p-2 rounded w-full"
                  >
                    <option value="Consultation Only">Consultation Only</option>
                    <option value="Partial Project">Partial Project</option>
                    <option value="Full Project Management">
                      Full Project Management
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Description Field */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                      minLength: {
                        value: 10,
                        message:
                          "Description must be at least 10 characters long",
                      },
                      maxLength: {
                        value: 500,
                        message: "Description cannot exceed 500 characters",
                      },
                    })}
                    id="description"
                    className="border border-gray-300 p-2 rounded w-full h-32 resize-none"
                    placeholder="Describe briefly"
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Image Upload Field */}
                <div>
                  <label
                    htmlFor="images"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Images
                  </label>
                  <input
                    {...register("images", {
                      required: "At least one image is required",
                    })}
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple // Allow multiple file selection
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                  {errors.images && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.images.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-green-700 text-white py-2 px-6 rounded w-full hover:bg-green-800 transition"
                >
                  Get Free Quote
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-auto relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.722275823645!2d31.449224075552575!3d30.016129974937787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAwJzU4LjEiTiAzMcKwMjcnMDYuNSJF!5e0!3m2!1sen!2seg!4v1733093236265!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
