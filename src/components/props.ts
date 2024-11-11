export const props = {
	main: `
interface Props {
    name: string;
    age: number;
}
export default function Greeting({ name, age }: Props) {
 return <h3>Hii {name} with age {age}</h3>
}
    `,
};
