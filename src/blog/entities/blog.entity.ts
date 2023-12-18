import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Like } from '../../like/entities/like.entity';
import { View } from '../../view/entities/view.entity';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  thumbnail: string;

  @Column()
  slug: string;

  @Column()
  meta_title: string;

  @Column()
  meta_keyword: string;

  @Column()
  meta_description: string;

  @Column()
  status: string;

  @Column()
  published_at: string;

  @Column()
  tag_id: string;

  @Column()
  category_id: string;

  @ManyToMany(() => Blog, (blog) => blog.related_content)
  @JoinTable()
  related_content: Blog[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.blogs)
  author: User;

  @OneToMany(() => Like, (like) => like.blog)
  likes: Like[];

  @OneToMany(() => View, (view) => view.blog)
  views: View[];

  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];
}
