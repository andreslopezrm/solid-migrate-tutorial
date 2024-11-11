export const props = {
	solid: `
interface Props {
    name: string;
    age: number;
}
export default function Greeting({ name, age }: Props) {
 return <h3>Hii {name} with age {age}</h3>
}
    `,
    reactjs: `
interface Props {
    name: string;
    age: number;
}
export default function Greeting({ name, age }: Props) {
 return <h3>Hii {name} with age {age}</h3>
}
    `,
    angular: `
import { Component, Input } from '@angular/core';
export class GreetingComponent {
  @Input() name!: string;
  @Input() age!: number;
}
    `,
};
