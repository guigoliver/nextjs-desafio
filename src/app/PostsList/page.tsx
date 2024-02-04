"use client"

import { Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PostsList() {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts()
  }, [])

  return (
    <Grid2 container xs={12} spacing={4} rowSpacing={8} sx={{ padding: 4}}>
      {posts?.map((post) => (
        <Grid2 xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{            
            gap: 1,
            padding: 3,
            backgroundColor: 'paper',            
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',            
            overflow: 'ellipsis',
            '&:hover': {
              backgroundColor: 'lightblue',              
            }
          }}>
            <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
              <Typography variant="h5" component="div" sx={{ backgroundColor: 'paper', fontWeight: 'bold', fontSize: '1rem', color: 'black', textTransform: 'capitalize' }}>
                {post.title}
              </Typography>
            </Link>
          </Card>
        </Grid2>
      ))}
    </Grid2>

  );
}
