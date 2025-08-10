"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/clsxUtils";

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;
type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  icon?: boolean;
};
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

export const Accordion = ({ className, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root className={cn(className)} {...props} />
);

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
  <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />
);

export const AccordionTrigger = ({
  className,
  children,
  icon = true,
  ...props
}: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline data-[state=open]>svg:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => (
  <AccordionPrimitive.Content
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
);
