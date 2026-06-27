import { disabledActionClassName, disabledActionProps } from '../utils/disabledAction';

const Legal = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8">
          {isPrivacy ? 'PRIVACY POLICY.' : 'TERMS OF SERVICE.'}
        </h1>
        <div className="space-y-6 text-brand-grey text-lg leading-relaxed">
          {isPrivacy ? (
            <>
              <p>We use contact details submitted through this website only to respond to inquiries, prepare quotes, and communicate about requested services.</p>
              <p>We do not sell personal information. Project details shared with us are handled as business correspondence and used by our team to assess and deliver requested work.</p>
              <p>For privacy questions, email us at <a className={`text-brand-accent hover:text-white transition-colors ${disabledActionClassName}`} href="mailto:info@saqradvertising.com" {...disabledActionProps}>info@saqradvertising.com</a>.</p>
            </>
          ) : (
            <>
              <p>Website content is provided for general information about Saqr Al Sharq Advertising services. Quotes, timelines, materials, and project scope are confirmed separately in writing.</p>
              <p>All submitted inquiries should include accurate contact and project information so our team can respond properly.</p>
              <p>For service questions, call <a className={`text-brand-accent hover:text-white transition-colors ${disabledActionClassName}`} href="tel:+971507771306" {...disabledActionProps}>+971 50 7771306</a> or email <a className={`text-brand-accent hover:text-white transition-colors ${disabledActionClassName}`} href="mailto:info@saqradvertising.com" {...disabledActionProps}>info@saqradvertising.com</a>.</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Legal;
