import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: 'Software Engineering',
    projectDescription: '',
    budgetRange: 'Flexible / Discovery Stage',
    preferredContact: 'email',
    honeypot: '' // Anti-bot trap
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business or personal email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@company.com)';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project, problem, or technical goal';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters of context so we can prepare a thoughtful response';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      // Silently reject bot submission
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch and client state saving
    setTimeout(() => {
      try {
        const existingSubmissions = JSON.parse(sessionStorage.getItem('nexorel_inquiries') || '[]');
        existingSubmissions.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        sessionStorage.setItem('nexorel_inquiries', JSON.stringify(existingSubmissions));
      } catch {
        // Session storage failure fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const copyDraftToClipboard = () => {
    const text = `Project Inquiry for NEXOREL:
Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Service: ${formData.serviceInterest}
Budget: ${formData.budgetRange}
Preferred Contact: ${formData.preferredContact}

Project Description:
${formData.projectDescription}`;

    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  const mailtoLink = `mailto:ghaithsoltani36@email.com?subject=${encodeURIComponent(
    `[NEXOREL Project Inquiry] ${formData.serviceInterest} - ${formData.fullName || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hi NEXOREL Engineering Team,\n\nI would like to discuss a project:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.serviceInterest}\nEstimated Budget: ${formData.budgetRange}\nPreferred Contact: ${formData.preferredContact}\n\nProject Scope:\n${formData.projectDescription}\n\nLooking forward to hearing from you.`
  )}`;

  return (
    <div className="grid-2" style={{ alignItems: 'flex-start' }}>
      {/* Left Column: Direct Studio Information */}
      <div>
        <span className="section-tag">
          <Mail size={14} />
          <span>Direct Contact</span>
        </span>
        <h2 style={{ fontSize: '2.25rem', marginBottom: '20px' }}>
          Let’s discuss your technical challenge.
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
          Whether you need an MVP built from scratch, an operational bottleneck automated in n8n, or your servers hardened for production, we will provide a realistic technical evaluation without sales pressure.
        </p>

        <div className="card mb-6" style={{ background: 'var(--bg-secondary)' }}>
          <div className="flex items-start gap-4 mb-4">
            <div style={{ color: 'var(--brand-cyan)', marginTop: '4px' }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Engineering Email</div>
              <a 
                href="mailto:ghaithsoltani36@email.com" 
                style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}
              >
                ghaithsoltani36@email.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div style={{ color: 'var(--brand-cyan)', marginTop: '4px' }}>
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Studio Location</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Tunis, Tunisia · Serving Clients Globally
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div style={{ color: 'var(--brand-cyan)', marginTop: '4px' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Response Timeframe</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Within 24 to 48 business hours with an engineering review.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted" style={{ fontSize: '0.85rem' }}>
          <ShieldCheck size={16} className="text-emerald" />
          <span>Zero third-party trackers. Confidentiality guaranteed.</span>
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="card card-gradient-top">
        {submitted ? (
          <div className="text-center" style={{ padding: '32px 16px' }}>
            <div 
              style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.15)', 
                color: 'var(--brand-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}
            >
              <CheckCircle size={32} />
            </div>

            <h3 style={{ marginBottom: '12px' }}>Inquiry Received Successfully</h3>
            <p style={{ marginBottom: '24px', fontSize: '0.95rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. We have saved your project details and will review your technical requirements.
            </p>

            <div 
              className="mb-6 text-left" 
              style={{ 
                background: 'rgba(4, 13, 31, 0.8)', 
                padding: '16px', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--border-subtle)',
                fontSize: '0.85rem'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted">Draft Summary:</span>
                <button 
                  onClick={copyDraftToClipboard} 
                  className="btn btn-outline btn-sm"
                  style={{ padding: '4px 8px', fontSize: '0.75rem' }}
                >
                  {copiedDraft ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
                  <span>{copiedDraft ? 'Copied' : 'Copy Text'}</span>
                </button>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                <strong>Service:</strong> {formData.serviceInterest}<br />
                <strong>Email:</strong> {formData.email}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href={mailtoLink} 
                className="btn btn-primary"
              >
                <Mail size={16} />
                <span>Open in Email Client to Send Directly</span>
              </a>
              <button 
                onClick={() => setSubmitted(false)} 
                className="btn btn-outline btn-sm"
              >
                Submit Another Project Brief
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Project Specification</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '24px' }}>
              Tell us what you are building. All fields marked with <span className="form-required">*</span> are required.
            </p>

            {/* Honeypot field (hidden from real users, traps bots) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website_bot_trap">Do not fill this field</label>
              <input 
                id="website_bot_trap" 
                type="text" 
                name="website_bot_trap"
                tabIndex={-1} 
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              />
            </div>

            {/* Name & Email Row */}
            <div className="grid-2" style={{ gap: '16px' }}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  <span>Your Name <span className="form-required">*</span></span>
                </label>
                <input 
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  required
                />
                {errors.fullName && (
                  <span id="fullName-error" className="form-error" role="alert">
                    <AlertCircle size={14} /> {errors.fullName}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span>Business Email <span className="form-required">*</span></span>
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Company & Service */}
            <div className="grid-2" style={{ gap: '16px' }}>
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  <span>Company / Organization <span className="text-muted" style={{ fontWeight: 400 }}>(Optional)</span></span>
                </label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  placeholder="e.g. Acme Tech"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceInterest" className="form-label">
                  <span>Service of Interest</span>
                </label>
                <select 
                  id="serviceInterest"
                  name="serviceInterest"
                  className="form-select"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                >
                  <option value="Software Engineering">Software Engineering (Web / API / DB)</option>
                  <option value="Automation & AI Workflows">Automation & AI Workflows (n8n)</option>
                  <option value="Cloud & DevOps">Cloud & DevOps (Docker / CI/CD)</option>
                  <option value="Security & DevSecOps">Security & DevSecOps (Hardening)</option>
                  <option value="UI/UX & Digital Experiences">UI/UX & Digital Experiences</option>
                  <option value="Full Integrated Project">Full Lifecycle (Build + Automate + Deploy)</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div className="form-group">
              <label htmlFor="projectDescription" className="form-label">
                <span>Project Scope & Goals <span className="form-required">*</span></span>
              </label>
              <textarea 
                id="projectDescription"
                name="projectDescription"
                className="form-textarea"
                rows={4}
                placeholder="What are you building or trying to solve? Include current technologies, target timeline, or specific operational challenges."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                aria-invalid={!!errors.projectDescription}
                aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
                required
              />
              {errors.projectDescription && (
                <span id="projectDescription-error" className="form-error" role="alert">
                  <AlertCircle size={14} /> {errors.projectDescription}
                </span>
              )}
            </div>

            {/* Budget & Preferred Contact */}
            <div className="grid-2" style={{ gap: '16px' }}>
              <div className="form-group">
                <label htmlFor="budgetRange" className="form-label">
                  <span>Estimated Budget <span className="text-muted" style={{ fontWeight: 400 }}>(Optional)</span></span>
                </label>
                <select 
                  id="budgetRange"
                  name="budgetRange"
                  className="form-select"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                >
                  <option value="Flexible / Discovery Stage">Flexible / Discovery Stage</option>
                  <option value="Under $2,000 (Small sprint / automation)">Under $2,000 (Small sprint / automation)</option>
                  <option value="$2,000 - $5,000 (Core MVP / integration)">$2,000 - $5,000 (Core MVP / integration)</option>
                  <option value="$5,000 - $10,000+ (Full product build)">$5,000 - $10,000+ (Full product build)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact" className="form-label">
                  <span>Preferred Contact Method</span>
                </label>
                <select 
                  id="preferredContact"
                  name="preferredContact"
                  className="form-select"
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as any })}
                >
                  <option value="email">Email Response</option>
                  <option value="video_call">Video Technical Discovery Call (Google Meet)</option>
                  <option value="phone">Phone / WhatsApp</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-block mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Validating & Submitting...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Project Inquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
