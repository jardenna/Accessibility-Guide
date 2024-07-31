import { TextInfoList } from '../../types/interfaces';

const altTextList: TextInfoList[] = [
  {
    strongText: 'Be Precise',
    description:
      'Alt text should accurately convey the  image’s content and function',
  },
  {
    strongText: 'Keep alt text short and focused',
    description:
      'Many screen readers cut off alt text at 125 characters, so aim for under 100 characters',
  },
  {
    strongText: 'Avoid Redundancy',
    description:
      'Do not repeat information or use the same alt text for different images',
  },
  {
    strongText: 'Skip Unnecessary Phrases',
    description:
      'Avoid "image of..." or "graphic of..." as assistive technology already indicates the presence of an image.',
  },
  {
    strongText: 'Describe Concisely',
    description:
      'Limit descriptions to under 140 characters, focusing on the content and purpose',
  },
  {
    strongText: 'Avoid Repetition',
    description:
      'Do not duplicate adjacent text in the alt text to prevent redundancy for screen readers',
  },
  {
    strongText: 'Relevance Over Keywords',
    description:
      'Don’t stuff alt text with keywords. Focus on clarity and relevance to the image’s purpose',
  },
  {
    strongText: 'No Extra Details',
    description:
      'Don’t add unnecessary details that don’t contribute to the understanding of the image.',
  },
  {
    strongText: 'Ensure Accurate Representation',
    description:
      'Make sure the description accurately represents the image’s content. Misleading or inaccurate descriptions can confuse users',
  },
];

export default altTextList;
