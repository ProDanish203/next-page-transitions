"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <AnimatedLink href="/" title="Index" />
        </div>
      </div>

      <div className="links">
        <div className="link">
          <AnimatedLink href="/projects" title="Projects" />
        </div>
        <div className="link">
          <AnimatedLink href="/info" title="Info" />
        </div>
      </div>
    </nav>
  );
};

const AnimatedLink = ({ title, href }: { title: string; href: string }) => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const isSamePath = pathname.includes(href);

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (isSamePath) return;
        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {title}
    </a>
  );
};
