import { create } from "zustand";

interface NavState {
  navState: "open" | "close";
  openNavbar: () => void;
  closeNavbar: () => void;
  toggleNavbar: () => void;
}

export const useNavbar = create<NavState>((set) => ({
  navState: "close",

  openNavbar: () =>
    set(() => ({
      navState: "open",
    })),

  closeNavbar: () =>
    set(() => ({
      navState: "close",
    })),

  toggleNavbar: () =>
    set((state) => ({
      navState: state.navState === "open" ? "close" : "open",
    })),
}));

export const useNavState = () => {
  const { navState } = useNavbar();

  return { navState };
};

export const useNavAction = () => {
  const { closeNavbar, openNavbar, toggleNavbar } = useNavbar();

  return { closeNavbar, openNavbar, toggleNavbar };
};
