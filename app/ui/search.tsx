'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string, urlParams: URLSearchParams) => {
    const params = new URLSearchParams(urlParams);
    params.set('page', '1'); // Reset page to 1 when searching

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    //Replaces browser history and url with new params
    replace(`${pathname}?${params.toString()}`);

    return params;
  }, 300);

  return (
    <Form className="relative flex w-1/2">
      <Field.Root name="search" className="relative flex w-1/2">
        <Field.Label className="sr-only">Search</Field.Label>
        <Field.Control
          className="min-w-56 block rounded-md border border-[var(--bg-color-lighter)] bg-[var(--bg-color)] py-[5px] pl-10 text-sm text-[var(--text-color)] placeholder:text-[var(--text-color)] focus-visible:ring-2 focus-visible:ring-[var(--bg-color-lighter)] focus-visible:ring-offset-0"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value, searchParams)}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--text-color)]" />
      </Field.Root>
    </Form>
  );
}
