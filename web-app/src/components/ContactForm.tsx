import { useState } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang];
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const workTypes = [
    { value: 'salle-de-bain', label: t.workTypeBathroom },
    { value: 'revetement-plancher', label: t.workTypeFlooring },
    { value: 'apres-sinistre', label: t.workTypeDisaster },
    { value: 'cabanon-patio', label: t.workTypeShedPatio },
    { value: 'revetement-exterieur', label: t.workTypeExterior },
    { value: 'renovation-interieur-exterieur', label: t.workTypeRenovation },
    { value: 'portes-fenetres', label: t.workTypeDoorsWindows },
    { value: 'calfeutrage', label: t.workTypeCaulking },
    { value: 'finition-interieur', label: t.workTypeInteriorFinish },
    { value: 'ceramique', label: t.workTypeCeramic },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      // Using Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
    >
      {/* Netlify form fields */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formPhone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formEmail}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formCity}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Work Type */}
        <div>
          <label htmlFor="workType" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formWorkType}
          </label>
          <select
            id="workType"
            name="workType"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
          >
            <option value="">{t.formWorkTypePlaceholder}</option>
            {workTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t.formMessage}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? t.formSubmitting : t.formSubmit}
        </button>

        {/* Status Messages */}
        {formStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
            {t.formSuccess}
          </div>
        )}
        {formStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
            {t.formError}
          </div>
        )}
      </div>
    </form>
  );
}
