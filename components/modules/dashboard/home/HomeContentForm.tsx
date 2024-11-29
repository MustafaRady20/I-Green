/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { HomeContent, TranslatedContent } from '@/types/home-content'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

const translatedContentSchema = z.object({
  en: z.string().min(1, 'English content is required'),
  ar: z.string().min(1, 'Arabic content is required'),
})

const homeContentSchema = z.object({
  heroSection: z.object({
    backgroundImage: z.string().url('Must be a valid URL'),
    title: translatedContentSchema,
    description: translatedContentSchema,
  }),
  servicesSection: z.object({
    title: translatedContentSchema,
    services: z.array(z.object({
      title: translatedContentSchema,
      description: translatedContentSchema,
      icon: z.string().min(1, 'Icon is required'),
    })).min(1, 'At least one service is required'),
  }),
  aboutSection: z.object({
    title: translatedContentSchema,
    content: translatedContentSchema,
    image: z.string().url('Must be a valid URL'),
  }),
  contactSection: z.object({
    title: translatedContentSchema,
    content: translatedContentSchema,
  }),
})

export function HomeContentForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<HomeContent>({
    resolver: zodResolver(homeContentSchema),
    defaultValues: {
      heroSection: {
        // backgroundImage: '',
        title: { en: '', ar: '' },
        description: { en: '', ar: '' },
      },
      servicesSection: {
        title: { en: '', ar: '' },
        services: [
          { title: { en: '', ar: '' }, description: { en: '', ar: '' }, icon: '' },
        ],
      },
      aboutSection: {
        title: { en: '', ar: '' },
        content: { en: '', ar: '' },
        image: '',
      },
      contactSection: {
        title: { en: '', ar: '' },
        content: { en: '', ar: '' },
      },
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'servicesSection.services',
  })

  async function onSubmit(data: HomeContent) {
    setIsLoading(true)
    try {
      const response = await fetch('/api/update-home-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to update content')
      }

      toast({
        title: 'Success',
        description: 'Home page content updated successfully',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update home page content',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const renderTranslatedField = (name: string, label: string, textArea = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name={`${name}.en` as never}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label} (English)</FormLabel>
            <FormControl>
              {textArea ? <Textarea {...field} /> : <Input {...field} />}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${name}.ar` as never}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label} (Arabic)</FormLabel>
            <FormControl>
              {textArea ? <Textarea {...field} dir="rtl" /> : <Input {...field} dir="rtl" />}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
          <FormField
            control={form.control}
            name="heroSection.backgroundImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {renderTranslatedField('heroSection.title', 'Title')}
          {renderTranslatedField('heroSection.description', 'Description', true)}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Services Section</h2>
          {renderTranslatedField('servicesSection.title', 'Section Title')}
          {fields.map((field, index) => (
            <div key={field.id} className="border p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Service {index + 1}</h3>
              {renderTranslatedField(`servicesSection.services.${index}.title`, 'Service Title')}
              {renderTranslatedField(`servicesSection.services.${index}.description`, 'Service Description', true)}
              <FormField
                control={form.control}
                name={`servicesSection.services.${index}.icon`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => remove(index)}
                className="mt-2"
              >
                Remove Service
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ title: { en: '', ar: '' }, description: { en: '', ar: '' }, icon: '' })}
          >
            Add Service
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About Section</h2>
          {renderTranslatedField('aboutSection.title', 'Title')}
          {renderTranslatedField('aboutSection.content', 'Content', true)}
          <FormField
            control={form.control}
            name="aboutSection.image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Section</h2>
          {renderTranslatedField('contactSection.title', 'Title')}
          {renderTranslatedField('contactSection.content', 'Content', true)}
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Home Page Content'}
        </Button>
      </form>
    </Form>
  )
}

