"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { saveLeadStep1, saveLeadStep2 } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";

const step1Schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  mobile: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "Please enter a valid 10-digit mobile.",
  }),
});

const step2Schema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  city: z.string().min(2, { message: "City is required." }),
  designation: z.string().min(2, { message: "Designation is required." }),
});

const fullSchema = step1Schema.merge(step2Schema);

type LeadFormValues = z.infer<typeof fullSchema>;

export default function LeadCaptureForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      designation: "",
    },
    mode: "onChange"
  });

  const handleNextStep = async () => {
    const isValid = await form.trigger(["name", "mobile"]);
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const data = form.getValues();
      const result = await saveLeadStep1({ name: data.name, mobile: data.mobile });
      if (result.success) {
        setStep(2);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message || "Failed to save details. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await saveLeadStep2(data);
      if (result.success) {
        router.push('/thank-you');
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message || "Failed to save details. Please try again.",
        });
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card id="lead-form" className="w-full max-w-md shadow-2xl bg-card/90 backdrop-blur-sm">
      <CardHeader className="text-center p-8">
        <CardTitle className="text-3xl font-bold font-headline text-primary">Request a Free Quote</CardTitle>
        <CardDescription className="pt-2">Step {step} of 2 &middot; Quick & Easy</CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className={step === 1 ? 'block' : 'hidden'}>
              <div className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl><Input placeholder="9876543210" type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className={step === 2 ? 'block' : 'hidden'}>
               <div className="space-y-4">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input placeholder="john.doe@example.com" type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl><Input placeholder="e.g. Mumbai" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="designation" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl><Input placeholder="e.g. Project Manager" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               </div>
            </div>

            <div className="flex justify-between items-center pt-4">
                {step === 2 && (
                    <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={isSubmitting}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                )}
                <div className={step === 1 ? "w-full" : ""}></div>
                {step === 1 && (
                    <Button type="button" onClick={handleNextStep} disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Next Step
                    </Button>
                )}
                {step === 2 && (
                    <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                         {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Get My Quote
                    </Button>
                )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
