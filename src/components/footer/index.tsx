import { cn } from "@/lib/utils";
import { ThemeButton } from "@/ui/theme-button";
import { Image } from "@unpic/react";
import logo from "@/assets/indiglobe-logo.avif";
import {} from "react-icons";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiGithubFill,
  RiWhatsappFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={cn(`gap-x-8 px-10 pt-8 pb-20 sm:px-20 md:px-30`)}>
      <div className={cn(`grid gap-6`)}>
        <section className={cn(`flex flex-col gap-y-6`)}>
          <div className={cn(`flex items-center`)}>
            <div className={cn(`size-12`)}>
              <Image layout="fullWidth" src={logo} />
            </div>
            <div
              className={cn(`text-secondary-600 text-2xl font-bold uppercase`)}
            >
              Indiglobe
            </div>
          </div>

          <div className={cn(`text-balance`)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae est
            cupiditate corporis possimus molestias. Quasi.
          </div>

          <div>
            <ul className={cn(`text-text-700 dark:text-text-800 flex gap-4`)}>
              <li>
                <a href="#">
                  <RiFacebookCircleFill size={28} />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiWhatsappFill size={28} />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiInstagramFill size={28} />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className={cn(``)}>
          <div>
            <span className={cn(`block pb-4 text-xl font-bold`)}>
              Useful links
            </span>
            <ul className={cn(`flex flex-col gap-y-2`)}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div></div>
        </section>

        <section className={cn(``)}>
          <div>
            <span className={cn(`block pb-4 text-xl font-bold`)}>Theme</span>
            <Theme />
          </div>
        </section>
      </div>

      <div
        className={cn(
          `flex flex-col items-center justify-center gap-y-4 pt-10 text-sm font-semibold md:flex-row md:justify-between`,
        )}
      >
        <p>
          &copy; {new Date(Date.now()).getFullYear()} Indiglobe. All right
          reserve.
        </p>

        <span>
          <a href="https://github.com" target="_blank">
            <RiGithubFill size={28} />
          </a>
        </span>
      </div>
    </footer>
  );
}

function Theme() {
  return <ThemeButton />;
}
