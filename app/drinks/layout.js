const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-card mb-8 p-4 bg-primary rounded text-white">
        <code>
          This is the layout page which will display in all the drinks
          components
        </code>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
