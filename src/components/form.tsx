"use client";

import { FormData } from "@/lib/type";
import {
  Button,
  Field,
  Input,
  Label,
  Select,
  Textarea,
} from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import clsx from "clsx";
import { FormEvent, useState } from "react";

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  message: "",
};

export default function Form() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form " + form);
  };

  const reset = () => setForm(initialForm);

  return (
    <section className="max-w-screen-lg mx-auto px-4">
      <form
        className="max-w-[450px] mx-auto space-y-4 px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-xl border-2 border-secondary-100 shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 justify-between">
          <Field className="w-full">
            <Label className="text-sm/6 font-medium">
              First name
              <span className="text-error-900">*</span>
            </Label>

            <Input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              placeholder="Enter your first name"
              className={clsx(
                "mt-1 block w-full rounded-lg border-none bg-gray-100 bg-none py-1.5 px-3 text-sm/6 ",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800"
              )}
              disabled={isLoading}
              required
            />
          </Field>

          <Field className="w-full">
            <Label className="text-sm/6 font-medium ">
              Last name
              <span className="text-error-900">*</span>
            </Label>

            <Input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder="Enter your last name"
              className={clsx(
                "mt-1 block w-full rounded-lg border-none bg-gray-100 py-1.5 px-3 text-sm/6 ",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800"
              )}
              disabled={isLoading}
              required
            />
          </Field>
        </div>

        <Field>
          <Label className="text-sm/6 font-medium ">
            E-Mail Address
            <span className="text-error-900">*</span>
          </Label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            className={clsx(
              "mt-1 block w-full rounded-lg border-none bg-gray-100 py-1.5 px-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800"
            )}
            disabled={isLoading}
            required
          />
        </Field>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 justify-between">
          <Field className="w-full">
            <Label className="text-sm/6 font-medium ">
              Date of birth
              <span className="text-error-900">*</span>
            </Label>

            <Input
              value={form.dateOfBirth}
              onChange={(e) =>
                setForm({ ...form, dateOfBirth: e.target.value })
              }
              type="date"
              className={clsx(
                "mt-1 block w-full rounded-lg border-none bg-gray-100 py-1.5 px-3 text-sm/6 ",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800"
              )}
              disabled={isLoading}
              required
            />
          </Field>

          <Field className="w-full">
            <Label className="text-sm/6 font-medium ">
              Gender
              <span className="text-error-900">*</span>
            </Label>

            <div className="relative">
              <Select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className={clsx(
                  "mt-1 block w-full appearance-none rounded-lg border-none bg-gray-100 py-1.5 px-3 text-sm/6 ",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800",
                  "*:text-black"
                )}
                disabled={isLoading}
                required
              >
                {/* Note: Used as empty default value  */}
                <option value="" className="sr-only hidden">
                  Select gender
                </option>

                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </Select>

              <IconChevronDown
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
                aria-hidden="true"
              />
            </div>
          </Field>
        </div>

        <Field>
          <Label className="text-sm/6 font-medium ">
            Message
            <span className="text-error-900">*</span>
          </Label>

          <Textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Enter your message"
            className={clsx(
              "mt-1 block w-full resize-none rounded-lg border-none bg-gray-100 py-1.5 px-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-800"
            )}
            rows={3}
            disabled={isLoading}
            required
          />
        </Field>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            className="inline-flex items-center gap-2 rounded-lg bg-white border-2 text-secondary-900 border-secondary-900 py-1.5 px-6 text-sm/6 font-semibold  shadow-inner focus:outline-none data-[hover]:bg-secondary-900/5 data-[open]:bg-secondary-200 data-[focus]:outline-1 data-[focus]:outline-primary-900"
            onClick={reset}
            disabled={isLoading}
            type="reset"
          >
            Reset
          </Button>

          <Button
            className="inline-flex items-center gap-2 rounded-lg bg-primary-900 text-white py-1.5 px-6 text-sm/6 font-semibold  shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-primary-900/90 data-[open]:bg-primary-700 data-[focus]:outline-1 data-[focus]:outline-primary-800"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? (
              <span>Send Data</span>
            ) : (
              <span>
                Sending Data
                <span className="animate-bounce">...</span>
              </span>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
