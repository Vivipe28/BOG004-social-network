import PostContainer from '../src/lib/post.js';

jest.mock('../src/lib/firebase-imports.js');

describe('Post', () => {
  it('should create a comment', () => {
    const postContainer = PostContainer();
    const form = postContainer.querySelector('#form-container');
    const commentInput = postContainer.querySelector('#task-comment');
    // fill comment input
    commentInput.value = 'Test comment';

    // submit comment
    form.dispatchEvent(new Event('submit'));

    const errorMessage = postContainer.querySelector('.errorMessage');
    expect(errorMessage.textContent).toBe('');
  });

  it('should show an error if comment is empty', () => {
    const postContainer = PostContainer();
    const form = postContainer.querySelector('#form-container');

    // submit empty comment
    form.dispatchEvent(new Event('submit'));

    const errorMessage = postContainer.querySelector('.errorMessage');
    expect(errorMessage.textContent).toBe('Please write your comment');
  });
});
