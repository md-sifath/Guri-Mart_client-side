import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex-row items-center bg-gray-200 p-10 shadow-sm">
        <h1 className="text-center text-2xl">Something went worng!🧐</h1>
        <p className="text-md mb-3 mt-3 text-gray-800">{error.message}</p>
        {console.log(error)}
        <Button onclick={resetErrorBoundary} type="primary">
          Try again!
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
