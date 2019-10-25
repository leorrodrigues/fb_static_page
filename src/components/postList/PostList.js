import React, { Component } from 'react';
import { resolve } from 'path';
import './PostList.css';

import Post from '../post/Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Julio Alcantara',
                    avatar: require('../../assets/julio.png'),
                },
                date: '04 Jun 2019',
                content:
                    'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Diego Fernandes',
                            avatar: require('../../assets/diego.png'),
                        },
                        content:
                            'Diego Fernandes A Rocketseat está sempre em busca \
							de novos membros para o time, e geralmente ficamos \
							de olho em quem se destaca no Bootcamp, inclusive \
							80% do nosso time de devs é composto por alunos do \
							Bootcamp. Além disso, se você tem vontade de \
							ensinar gravando vídeos e criando posts, pode me \
							chamar no Discord! (Sério, me chamem mesmo, esse \
								comentário é real)',
                    },
                ],
            },
            {
                id: 2,
                author: {
                    name: 'Gabriel Lisboa',
                    avatar: require('../../assets/gabriel.png'),
                },
                date: '04 Jun 2019',
                content:
                    'Fala galera beleza?\nEstou fazendo o \
					Bootcamp GoStack da Rocketseat e está sendo muito \
					massa! Alguém mais ai fazendo, comenta \
					na publicação para trocarmos uma ideia.',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Clara Lisboa',
                            avatar: require('../../assets/clara.png'),
                        },
                        content:
                            'Também estou fazendo o Bootcamp e estou \
						adorando! Estou no terceiro módulo sobre Node \
						e já tenho minha API dos desafios construída',
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Cézar Toledo',
                            avatar: require('../../assets/cezar.png'),
                        },
                        content:
                            'Que maaaaaasa! Estou pensando em me inscrever na \
							proxima turma para ver qual é desse Bootcamp \
							GoStack, dizem que os devs saem de lá com \
							super poderes!',
                    },
                ],
            },
            {
                id: 3,
                author: {
                    name: 'Gabriel Lisboa',
                    avatar: require('../../assets/gabriel.png'),
                },
                date: '04 Jun 2019',
                content:
                    'Fala galera beleza?\nEstou fazendo o \
					Bootcamp GoStack da Rocketseat e está sendo muito \
					massa! Alguém mais ai fazendo, comenta \
					na publicação para trocarmos uma ideia.',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Clara Lisboa',
                            avatar: require('../../assets/clara.png'),
                        },
                        content:
                            'Também estou fazendo o Bootcamp e estou \
						adorando! Estou no terceiro módulo sobre Node \
						e já tenho minha API dos desafios construída',
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Cézar Toledo',
                            avatar: require('../../assets/cezar.png'),
                        },
                        content:
                            'Que maaaaaasa! Estou pensando em me inscrever na \
							proxima turma para ver qual é desse Bootcamp \
							GoStack, dizem que os devs saem de lá com \
							super poderes!',
                    },
                ],
            },
        ],
    };

    render() {
        return (
            <div className="postlist">
                {this.state.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default PostList;
