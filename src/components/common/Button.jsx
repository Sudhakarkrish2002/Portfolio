import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "font-semibold transition-colors rounded-full shadow-md hover:shadow-lg border-0"; // macOS pill style, no focus ring
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-400 to-blue-300 text-black hover:from-blue-500 hover:to-blue-400 hover:text-white", // deeper blue on hover
    secondary: "bg-gradient-to-r from-gray-800 to-gray-700 text-blue-300 hover:from-gray-900 hover:to-gray-800 hover:text-white hover:border-blue-400", // modern black hover
    outline: "bg-gradient-to-r from-green-400 to-green-300 text-black hover:from-green-600 hover:to-green-600 hover:text-white border border-green-400", // deeper green on hover
    ghost: "bg-gradient-to-r from-transparent to-transparent text-blue-400 hover:from-blue-200 hover:to-blue-300 hover:text-blue-900 border border-blue-200"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const loadingClasses = loading ? "opacity-50 cursor-not-allowed" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${loadingClasses} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
