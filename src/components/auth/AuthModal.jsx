import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative text-yellow-900">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg text-yellow-800 hover:text-yellow-600"
        >
          ❌ Close
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {type === 'login' ? 'Login to Your Account' : 'Register New Account'}
        </h2>

        {type === 'login' ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
      </div>
    </div>
  );
};

export default AuthModal;
