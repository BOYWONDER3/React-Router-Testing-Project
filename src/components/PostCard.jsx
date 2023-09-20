import { Link } from 'react-router-dom'


export function PostCard({ id, title, body }) {
  return (
    <div class="card">
      <div class="card-header">{title}</div>
      <div class="card-body">
        <div class="card-preview-text">{body}</div>
      </div>
      <div class="card-footer">
        <Link class="btn" to={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
