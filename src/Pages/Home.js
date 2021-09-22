import React, { useState } from 'react';

import { SortDiv, SortButton } from '../Components/Buttons';
import PostModule from '../Modules/PostModule';

const examplePosts = [
	{
		_id: '613932b97ae4ed0acafd6134',
		title: 'This is the first post!',
		text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
		owner: {
			_id: '613932a47ae4ed0acafd6130',
			username: 'Will',
			email: 'will@gmail.com',
			createdAt: '2021-09-08T22:01:08.258Z',
			updatedAt: '2021-09-08T22:01:08.258Z',
			__v: 0,
		},
		comments: [
			{
				_id: '613932e57ae4ed0acafd613f',
				title: 'First',
				text: 'Comment text',
				owner: {
					_id: '613932a47ae4ed0acafd6130',
					username: 'Will',
					email: 'will@gmail.com',
					createdAt: '2021-09-08T22:01:08.258Z',
					updatedAt: '2021-09-08T22:01:08.258Z',
					__v: 0,
				},
				post: '613932b97ae4ed0acafd6134',
				createdAt: '2021-09-08T22:02:13.597Z',
				updatedAt: '2021-09-08T22:02:13.597Z',
				__v: 0,
			},
			{
				_id: '613932ed7ae4ed0acafd6144',
				title: 'Second',
				text: 'Comment text',
				owner: {
					_id: '613932a47ae4ed0acafd6130',
					username: 'Will',
					email: 'will@gmail.com',
					createdAt: '2021-09-08T22:01:08.258Z',
					updatedAt: '2021-09-08T22:01:08.258Z',
					__v: 0,
				},
				post: '613932b97ae4ed0acafd6134',
				createdAt: '2021-09-08T22:02:21.082Z',
				updatedAt: '2021-09-08T22:02:21.082Z',
				__v: 0,
			},
			{
				_id: '613932f17ae4ed0acafd6149',
				title: 'Third',
				text: 'Comment text',
				owner: {
					_id: '613932a47ae4ed0acafd6130',
					username: 'Will',
					email: 'will@gmail.com',
					createdAt: '2021-09-08T22:01:08.258Z',
					updatedAt: '2021-09-08T22:01:08.258Z',
					__v: 0,
				},
				post: '613932b97ae4ed0acafd6134',
				createdAt: '2021-09-08T22:02:25.096Z',
				updatedAt: '2021-09-08T22:02:25.096Z',
				__v: 0,
			},
			{
				_id: '613932f67ae4ed0acafd614e',
				title: 'First',
				text: 'Comment text',
				owner: {
					_id: '613932a47ae4ed0acafd6130',
					username: 'Will',
					email: 'will@gmail.com',
					createdAt: '2021-09-08T22:01:08.258Z',
					updatedAt: '2021-09-08T22:01:08.258Z',
					__v: 0,
				},
				post: '613932b97ae4ed0acafd6134',
				createdAt: '2021-09-08T22:02:30.253Z',
				updatedAt: '2021-09-08T22:02:30.253Z',
				__v: 0,
			},
			{
				_id: '6139347f17e73e0aa3026965',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '613932b97ae4ed0acafd6134',
				createdAt: '2021-09-08T22:09:03.922Z',
				updatedAt: '2021-09-08T22:09:03.922Z',
				__v: 0,
			},
		],
		createdAt: '2021-09-08T22:01:29.391Z',
		updatedAt: '2021-09-08T22:09:03.924Z',
		__v: 5,
	},
	{
		_id: '613932be7ae4ed0acafd6137',
		title:
			'This is the second post and a too long title because I need to test the length of shit',
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
		owner: {
			_id: '613932a47ae4ed0acafd6130',
			username: 'Will',
			email: 'will@gmail.com',
			createdAt: '2021-09-08T22:01:08.258Z',
			updatedAt: '2021-09-08T22:01:08.258Z',
			__v: 0,
		},
		comments: [
			{
				_id: '6139349b17e73e0aa302696e',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '613932be7ae4ed0acafd6137',
				createdAt: '2021-09-08T22:09:31.264Z',
				updatedAt: '2021-09-08T22:09:31.264Z',
				__v: 0,
			},
		],
		createdAt: '2021-09-08T22:01:34.327Z',
		updatedAt: '2021-09-08T22:09:31.266Z',
		__v: 1,
	},
	{
		_id: '613932c27ae4ed0acafd613a',
		title: '3',
		text: 'Test text lorem and whatnot',
		owner: {
			_id: '613932a47ae4ed0acafd6130',
			username: 'Will',
			email: 'will@gmail.com',
			createdAt: '2021-09-08T22:01:08.258Z',
			updatedAt: '2021-09-08T22:01:08.258Z',
			__v: 0,
		},
		comments: [],
		createdAt: '2021-09-08T22:01:38.544Z',
		updatedAt: '2021-09-08T22:01:38.544Z',
		__v: 0,
	},
	{
		_id: '6139345e17e73e0aa3026958',
		title: '4',
		text: 'Test text lorem and whatnot',
		owner: {
			_id: '6139344a17e73e0aa3026951',
			username: 'Found',
			email: 'found@gmail.com',
			createdAt: '2021-09-08T22:08:10.576Z',
			updatedAt: '2021-09-08T22:08:10.576Z',
			__v: 0,
		},
		comments: [
			{
				_id: '613934a417e73e0aa3026973',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139345e17e73e0aa3026958',
				createdAt: '2021-09-08T22:09:40.572Z',
				updatedAt: '2021-09-08T22:09:40.572Z',
				__v: 0,
			},
		],
		createdAt: '2021-09-08T22:08:30.324Z',
		updatedAt: '2021-09-08T22:09:40.574Z',
		__v: 1,
	},
	{
		_id: '6139346117e73e0aa302695b',
		title: '5',
		text: 'Test text lorem and whatnot',
		owner: {
			_id: '6139344a17e73e0aa3026951',
			username: 'Found',
			email: 'found@gmail.com',
			createdAt: '2021-09-08T22:08:10.576Z',
			updatedAt: '2021-09-08T22:08:10.576Z',
			__v: 0,
		},
		comments: [],
		createdAt: '2021-09-08T22:08:33.283Z',
		updatedAt: '2021-09-08T22:08:33.283Z',
		__v: 0,
	},
	{
		_id: '6139346417e73e0aa302695e',
		title: '6',
		text: 'Test text lorem and whatnot',
		owner: {
			_id: '6139344a17e73e0aa3026951',
			username: 'Found',
			email: 'found@gmail.com',
			createdAt: '2021-09-08T22:08:10.576Z',
			updatedAt: '2021-09-08T22:08:10.576Z',
			__v: 0,
		},
		comments: [
			{
				_id: '613934af17e73e0aa3026978',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139346417e73e0aa302695e',
				createdAt: '2021-09-08T22:09:51.082Z',
				updatedAt: '2021-09-08T22:09:51.082Z',
				__v: 0,
			},
			{
				_id: '613934af17e73e0aa302697d',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139346417e73e0aa302695e',
				createdAt: '2021-09-08T22:09:51.921Z',
				updatedAt: '2021-09-08T22:09:51.921Z',
				__v: 0,
			},
			{
				_id: '613934b017e73e0aa3026982',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139346417e73e0aa302695e',
				createdAt: '2021-09-08T22:09:52.451Z',
				updatedAt: '2021-09-08T22:09:52.451Z',
				__v: 0,
			},
			{
				_id: '613934b117e73e0aa3026987',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139346417e73e0aa302695e',
				createdAt: '2021-09-08T22:09:53.023Z',
				updatedAt: '2021-09-08T22:09:53.023Z',
				__v: 0,
			},
			{
				_id: '613934b117e73e0aa302698c',
				title: 'First???',
				text: 'Comment text',
				owner: {
					_id: '6139344a17e73e0aa3026951',
					username: 'Found',
					email: 'found@gmail.com',
					createdAt: '2021-09-08T22:08:10.576Z',
					updatedAt: '2021-09-08T22:08:10.576Z',
					__v: 0,
				},
				post: '6139346417e73e0aa302695e',
				createdAt: '2021-09-08T22:09:53.555Z',
				updatedAt: '2021-09-08T22:09:53.555Z',
				__v: 0,
			},
		],
		createdAt: '2021-09-08T22:08:36.539Z',
		updatedAt: '2021-09-08T22:09:53.560Z',
		__v: 5,
	},
];

function Home() {
	const [sortNew, setSortNew] = useState(true);

	function sortController(e, boolean) {
		e.preventDefault();
		setSortNew(boolean);
	}

	return (
		<div>
			<SortDiv>
				<SortButton
					className={`${sortNew ? 'selected' : ''}`}
					onClick={e => sortController(e, true)}
				>
					New Posts
				</SortButton>
				<SortButton
					className={`${sortNew ? '' : 'selected'}`}
					onClick={e => sortController(e, false)}
				>
					Top Posts
				</SortButton>
			</SortDiv>
			{examplePosts.map(postData => {
				return <PostModule data={postData} key={postData._id} />;
			})}
		</div>
	);
}

export default Home;
