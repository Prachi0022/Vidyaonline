import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IntegrationCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current) {
      return undefined;
    }

    const tween = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 40,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <svg
      ref={circleRef}
      className="ai-voice-generator-integration-circle"
      viewBox="0 0 1484 1484"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="740" cy="744" r="699.5" stroke="#F4EFE7" />
      {/* react - top (0°) */}
      <foreignObject x="704" y="4" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* next.js - top-right */}
      <foreignObject x="884.547" y="32.0527" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="h-9 w-9" />
        </div>
      </foreignObject>

      {/* node.js - right */}
      <foreignObject x="1054.55" y="102.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="h-[38px] w-[37px]" />
        </div>
      </foreignObject>

      {/* typescript - right-bottom */}
      <foreignObject x="1200.55" y="213.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="h-[29px] w-8" />
        </div>
      </foreignObject>

      {/* tailwind - bottom-right */}
      <foreignObject x="1314.55" y="358.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/tailwindcss/38BDF8" alt="Tailwind CSS" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* aws - bottom-right */}
      <foreignObject x="1378.55" y="528.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" alt="AWS" className="h-[26px] w-[38px]" />
        </div>
      </foreignObject>

      {/* azure - bottom */}
      <foreignObject x="1408" y="708" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* docker - bottom */}
      <foreignObject x="1378.55" y="887.947" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* kubernetes - bottom-left */}
      <foreignObject x="1314.55" y="1060.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" style={{ width: '34px', height: '34px' }} />
        </div>
      </foreignObject>

      {/* postgresql - left-bottom */}
      <foreignObject x="1196.55" y="1203.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="h-7 w-7" />
        </div>
      </foreignObject>

      {/* mongodb - right bottom */}
      <foreignObject x="1052.55" y="1312.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" style={{ width: '34.83px', height: '34.83px' }} />
        </div>
      </foreignObject>

      {/* redis - bottom */}
      <foreignObject x="886.547" y="1387.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis" className="h-9 w-[38px]" />
        </div>
      </foreignObject>

      {/* graphql - bottom */}
      <foreignObject x="704" y="1408" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/graphql/E10098" alt="GraphQL" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* python - left-bottom */}
      <foreignObject x="521.453" y="1380.32" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="h-9 w-9" />
        </div>
      </foreignObject>

      {/* vercel - left bottom */}
      <foreignObject x="354.547" y="1314.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" className="h-[38px] w-[37px]" />
        </div>
      </foreignObject>

      {/* cloudflare - left-bottom */}
      <foreignObject x="208.547" y="1203.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" className="h-[29px] w-8" />
        </div>
      </foreignObject>

      {/* firebase - left bottom */}
      <foreignObject x="96.5469" y="1058.05" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* stripe - left bottom */}
      <foreignObject x="32.5469" y="890" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 rotate-180 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="h-[24px] w-[38px]" />
        </div>
      </foreignObject>

      {/* github - top */}
      <foreignObject x="4" y="702" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/github/000000" alt="GitHub" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* supabase - top */}
      <foreignObject x="32.5469" y="528.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="h-[38px] w-[38px]" />
        </div>
      </foreignObject>

      {/* terraform - top-left */}
      <foreignObject x="96.5469" y="358.053" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/terraform/844FBA" alt="Terraform" style={{ width: '31px', height: '31px' }} />
        </div>
      </foreignObject>

      {/* datadog - top-left */}
      <foreignObject x="208.547" y="213.391" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/datadog/632CA6" alt="Datadog" className="h-7 w-7" />
        </div>
      </foreignObject>

      {/* sentry - top-left */}
      <foreignObject x="354.547" y="101.391" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/sentry/362D59" alt="Sentry" style={{ width: '34.83px', height: '34.83px' }} />
        </div>
      </foreignObject>

      {/* figma - top-right */}
      <foreignObject x="523.453" y="36" width="72" height="72">
        <div className="bg-secondary border-ns-ivory flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-8 shadow-none">
          <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="h-9 w-[38px]" />
        </div>
      </foreignObject>
    </svg>
  );
};

export default IntegrationCircle;
