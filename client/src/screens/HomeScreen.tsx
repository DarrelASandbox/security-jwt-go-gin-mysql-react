interface Props {
  firstName: string;
}

const HomeScreen = ({ firstName }: Props) =>
  firstName ? <h1>Welcome {firstName}!</h1> : <h1>Welcome to the Home Page!</h1>;

export default HomeScreen;
