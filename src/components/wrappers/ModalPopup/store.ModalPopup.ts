import { create } from 'zustand'

type StoreState = {
  visible: boolean
  title: string | null
  children: React.ReactNode
}

type StoreActions = {
  close: () => void
  open: (title: string, children: React.ReactNode) => void
}

type ModalSlideStore = StoreState & StoreActions

export const useStore = create<ModalSlideStore>((set) => ({
  visible: false,
  children: null,
  title: null,
  open: (title, children) => set({ visible: true, title, children }),
  close: () => set({ visible: false, title: null, children: null }),
}))
