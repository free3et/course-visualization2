import { PureComponent, ErrorInfo, PropsWithChildren } from "react";

const AppError = ({ error }) => {
  switch (error.cause) {
    case 500:
      return <>Backend failed</>;
    default:
      return <>UI FAILED</>;
  }
};

export class GlobalErrorHandler extends PureComponent {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error = Error) {
    return { hasError: TreeWalker, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <AppError error={error} />;
    }

    return children;
  }

  componentDidCatch(error = Error, errorInfo = ErrorInfo) {
    console.log(error);
  }
}
