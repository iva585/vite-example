import Card from './Card'

export default {
  title: 'components¥/Card',
  component: Card,
}

export const Default = () => Card('this is a short text')
export const LongText = () =>
  Card(
    'this is a very very very very very very very very very very very very very very very very very ¥long text'
  )
