'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
  privacy: boolean;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // In a real implementation, this would send the data to an API endpoint
      console.log('Form data submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message and reset form
      setSuccessMessage('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
      reset();
    } catch (error) {
      setErrorMessage('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {successMessage && (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Ihr Name"
          {...register('name', { required: 'Name ist erforderlich' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          E-Mail <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Ihre E-Mail-Adresse"
          {...register('email', {
            required: 'E-Mail ist erforderlich',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ungültige E-Mail-Adresse',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefon (optional)
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Ihre Telefonnummer"
          {...register('phone')}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Unternehmen <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          type="text"
          className={`w-full p-3 border rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Ihr Unternehmen"
          {...register('company', { required: 'Unternehmen ist erforderlich' })}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Wie können wir Ihnen helfen?"
          {...register('message', { required: 'Nachricht ist erforderlich' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Policy Checkbox */}
      <div>
        <div className="flex items-start">
          <input
            id="privacy"
            type="checkbox"
            className={`mt-1 h-4 w-4 rounded ${errors.privacy ? 'border-red-500' : 'border-gray-300'}`}
            {...register('privacy', { required: 'Sie müssen der Datenschutzerklärung zustimmen' })}
          />
          <label htmlFor="privacy" className="ml-2 text-sm">
            Ich habe die <a href="/datenschutz" className="text-primary hover:text-secondary underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.privacy && (
          <p className="mt-1 text-sm text-red-500">{errors.privacy.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm; 