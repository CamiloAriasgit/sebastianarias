import Image from 'next/image';

interface GradientDividerProps {
  className?: string;
}

export const GradientDivider = ({ className = '' }: GradientDividerProps) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <Image
        src="/images/gradient-divider.avif"
        alt=""
        aria-hidden="true"
        width={2592}
        height={300}
        sizes="100vw"
        className="w-full h-auto block"
      />
    </div>
  );
};

export default GradientDivider;