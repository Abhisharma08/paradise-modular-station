"use server";

import { saveToSheet } from "@/ai/flows/saveToSheet";
import { z } from "zod";

const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "Please enter a valid 10-digit mobile number.",
  }),
});

const step2Schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  city: z.string().min(2, "City is required."),
  designation: z.string().min(2, "Designation is required."),
});

const fullSchema = step1Schema.merge(step2Schema);

export async function saveLeadStep1(data: unknown) {
  const parsed = step1Schema.safeParse(data);
  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: errorMessages || "Invalid data for step 1." };
  }
  
  try {
    // Save partial data after step 1
    const result = await saveToSheet(parsed.data);
    if (result.success) {
        return { success: true, message: "Step 1 details saved successfully." };
    }
    return result;
  } catch (error) {
    return { success: false, message: "A server error occurred." };
  }
}

export async function saveLeadStep2(data: unknown) {
  const parsed = fullSchema.safeParse(data);
  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: errorMessages || "Invalid data for step 2." };
  }
  try {
    return await saveToSheet(parsed.data);
  } catch (error) {
    return { success: false, message: "A server error occurred." };
  }
}
