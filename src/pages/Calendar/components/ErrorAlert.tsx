export const ErrorAlert = ({ children }: any) => {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
};
