export const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent';

export function PaginationSkeleton() {
  return (
    <div
      className={`${shimmer} relative h-10 w-[292px] overflow-hidden rounded-md bg-surface-light md:w-[308px]`}
    />
  );
}
