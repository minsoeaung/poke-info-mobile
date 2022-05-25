import MyText from './MyText';

export default function SmallGreyText({ text }: { text: string }) {
    return <MyText style={{ fontSize: 10, color: 'grey' }}>{text}</MyText>;
}
