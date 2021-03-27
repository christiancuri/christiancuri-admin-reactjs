import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Pagination from 'react-paginate';
import { useHistory } from 'react-router';

import { CustomCard, Layout, Breadcrumb } from '@components';
import { format, parseISO } from 'date-fns';

import { IPost } from '@interfaces';

import { api } from '@services';

interface IPostsResponse {
  data: IPost[];
  total: number;
  hasMore: boolean;
  pagination: {
    skip: number;
    limit: number;
  };
}

function formatDate(date: string) {
  const isoDate = parseISO(date);
  return format(isoDate, "dd/MM/yyyy 'at' HH:mm");
}

type PostLineProps = {
  post: IPost;
};

const PostTableLineComponent: React.FC<PostLineProps> = ({ post }) => {
  return (
    <tr>
      <td>{post.title} </td>
      <td>{formatDate(post.createdAt)}</td>
      <td className="table-action">
        <a href="#!" className="action-icon">
          <i className="mdi mdi-pencil" />
        </a>
        <a href="#!" className="action-icon">
          <i className="mdi mdi-delete" />
        </a>
      </td>
    </tr>
  );
};

const PostsHome = (): ReactElement => {
  const history = useHistory();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchPosts = useCallback(async (page = 1) => {
    setCurrentPage(page);

    const offset = Math.ceil(page * limit - limit);

    const { data: postsData }: { data: IPostsResponse } = await api.get(
      `/blog/posts?skip=${offset}&limit=${limit}`,
    );

    if (skip !== postsData.pagination.skip) setSkip(postsData.pagination.skip);
    if (limit !== postsData.pagination.limit)
      setLimit(postsData.pagination.limit);
    if (totalPosts !== postsData.total) setTotalPosts(postsData.total);

    setPosts(postsData.data);

    const pages = postsData.total / postsData.pagination.limit;
    if (pages !== totalPages) setTotalPages(pages);
  }, []);

  const handlePaginate = useCallback(
    async data => {
      const page = data.selected;
      fetchPosts(page + 1);
    },
    [fetchPosts],
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Layout>
      <>
        <Row>
          <Col sm="12">
            <Breadcrumb
              name="Posts"
              right={
                <Button onClick={() => history.push('/new-post')}>
                  Add new post
                </Button>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <CustomCard>
              <table className="table table-hover table-centered mb-0">
                <thead>
                  <tr>
                    <th style={{ width: '70%' }}>Title</th>
                    <th>Created at</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.length
                    ? posts.map((post: IPost, key) => {
                        return <PostTableLineComponent post={post} key={key} />;
                      })
                    : null}
                </tbody>
              </table>
            </CustomCard>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="basic-datatable_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {currentPage} to {totalPages} of {totalPosts} posts
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  style={{ float: 'right' }}
                >
                  <Pagination
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    breakClassName="paginate_button page-item"
                    breakLinkClassName="page-link"
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={7}
                    onPageChange={handlePaginate}
                    containerClassName="pagination pagination-rounded"
                    activeClassName="active"
                    previousClassName="paginate_button page-item previous"
                    pageLinkClassName="page-link"
                    nextClassName="paginate_button page-item next"
                    pageClassName="paginate_button page-item"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    </Layout>
  );
};

export default PostsHome;
