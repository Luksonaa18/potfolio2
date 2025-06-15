"use client"
import { cn } from "@/app/lib/utils";
export const GridBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-1 w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Grid lines */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Page content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};
