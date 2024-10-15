"use server";

import { db } from "@/lib/firebaseConfig";
import { FormData } from "@/lib/type";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export async function addFormData(formData: FormData) {
  const { firstName, lastName, email, dateOfBirth, gender, message } = formData;

  try {
    const formRef = await addDoc(collection(db, "form"), {
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender,
      message,
    });

    return {
      data: formRef.id,
    };
  } catch {
    return {
      error: "Failed to add form data",
    };
  }
}

export async function getFormData(id: string) {
  try {
    const docRef = doc(db, "form", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        data: docSnap.data(),
      };
    } else {
      return {
        error: "No such document!",
      };
    }
  } catch (error) {
    return {
      error,
    };
  }
}
