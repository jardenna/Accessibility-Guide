import { FC } from 'react';

interface FigureCodeSnippetProps {}

const FigureCodeSnippet: FC<FigureCodeSnippetProps> = () => (
  <pre>
    <code>
      <p className="te">&lt;figure&gt;</p>
      <p className="te">
        &emsp; &lt;img src=&quot;/images/frog.jpg&quot; alt=&quot;&quot; /&gt;
      </p>
      <p className="te">
        &emsp; &lt;figcaption&gt;Red-Eyed Tree Frog&lt;/figcaption&gt;
      </p>
      <p className="te">&lt;/figure&gt;</p>
    </code>
  </pre>
);

export default FigureCodeSnippet;
