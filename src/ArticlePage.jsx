import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import 'katex/dist/katex.min.css'
import { profile } from './data'
import { essays } from './essays'
import { Icon } from './Icons'

const base = import.meta.env.BASE_URL || './'

// 把 Markdown 里的相对图片路径解析到部署基址下（public/ 里的资源）
function resolveSrc(src) {
  if (!src) return src
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src
  return base + src.replace(/^\.?\//, '')
}

function MdFigure({ src, alt }) {
  const [err, setErr] = useState(false)
  return (
    <figure className="md-figure">
      {err ? (
        <div className="md-figure-missing">
          <span className="mfm-icon">🖼️</span>
          <span>配图待补充</span>
          <code>public/{src}</code>
        </div>
      ) : (
        <img
          src={resolveSrc(src)}
          alt={alt || ''}
          loading="lazy"
          onError={() => setErr(true)}
        />
      )}
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  )
}

const mdComponents = {
  img: ({ src, alt }) => <MdFigure src={src} alt={alt} />,
  a: ({ node, ...props }) => <a target="_blank" rel="noreferrer" {...props} />,
}

export default function ArticlePage({ post }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [post])
  const md = essays[post.slug]
  return (
    <div className="article-wrap">
      <div className="article-topbar">
        <a className="article-back" href="#blog">
          <span className="back-arrow">←</span> 返回主页
        </a>
        <a className="brand" href="#home">
          <span className="brand-mark">{profile.name.charAt(0)}</span>
          <span className="brand-name">{profile.name}</span>
        </a>
      </div>
      <article className="article">
        <span className="post-tag">{post.tag}</span>
        <h1 className="article-title">{post.title}</h1>
        <div className="article-meta">
          <time>{post.date}</time>
        </div>
        <div className="article-body md">
          {md ? (
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex, rehypeUnwrapImages]}
              components={mdComponents}
            >
              {md}
            </ReactMarkdown>
          ) : (
            <p className="article-pending">正文整理中，敬请期待。</p>
          )}
        </div>
        {post.source && (
          <a
            className="article-source"
            href={post.source}
            target="_blank"
            rel="noreferrer"
          >
            原文首发于知乎 <Icon name="arrow" size={14} />
          </a>
        )}
      </article>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}. 用 ❤️ 与 React 构建。
        </span>
      </footer>
    </div>
  )
}
