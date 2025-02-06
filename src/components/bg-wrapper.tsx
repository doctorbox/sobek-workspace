interface WrapperComponentProps {
  children: React.ReactNode; // The content to be wrapped
  backgroundColor: string; // Tailwind background color class or custom color
}

const BgWrapper: React.FC<WrapperComponentProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <div className={`${backgroundColor}`}>
      <div className="flex flex-col mx-auto w-full max-w-[920px] max-md:max-w-full pt-12">
        {children}
      </div>
    </div>
  );
};

export default BgWrapper;
