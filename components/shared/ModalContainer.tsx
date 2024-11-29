import {
  Dialog,
  // Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import React from "react"
import { useGlobalModalContext } from "../providers/ModalProvider"
interface ModalContainerProps {
  // editOpen: boolean
  // setEditOpen: (editOpen: boolean) => void
  title?: string | React.ReactNode
  description?: string
  size?: string
  children: React.ReactNode
}
const ModalContainer: React.FC<ModalContainerProps> = ({
  title,
  description,
  // size,
  children,
}) => {
  const { hideModal } = useGlobalModalContext()

  return (
    <Dialog open modal>
      <DialogOverlay className=" w-full h-full  z-30 bg-black/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <DialogClose
              onClick={() => hideModal()}
              className="absolute  right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="size-6 " />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default ModalContainer
