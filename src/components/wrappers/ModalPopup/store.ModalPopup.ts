import { create } from 'zustand'

type StoreState = {
  visible: boolean
  title: string | null
  children: React.ReactNode
  minimal?: boolean
}

type StoreActions = {
  close: () => void
  open: (title: string, children: React.ReactNode, minimal?: boolean) => void
}

type ModalSlideStore = StoreState & StoreActions

export const useStore = create<ModalSlideStore>((set) => ({
  visible: false,
  children: null,
  title: null,
  open: (title, children, minimal) =>
    set({ visible: true, title, children, minimal }),
  close: () => set({ visible: false }),
}))
