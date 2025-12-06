import MyText from './MyText';

export default function SmallGreyText({ text }: { text: string }) {
    return <MyText style={{ fontSize: 12, color: '#E0E0E0' }}>{text}</MyText>;
}
