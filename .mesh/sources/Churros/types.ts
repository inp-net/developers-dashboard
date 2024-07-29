// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ChurrosTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  BooleanMap: { input: any; output: any; }
  Counts: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  File: { input: any; output: any; }
  LocalID: { input: any; output: any; }
  UID: { input: any; output: any; }
};

/** Announcement is a way to get a message accross the entire site, such as for maintenance announcements. */
export type Announcement = Node & {
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  by?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  startsAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
  warning: Scalars['Boolean']['output'];
};

/** Une réponse à un formulaire. Les réponses peuvent être de plusieurs types différents (en fonction de la question). */
export type Answer = {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  question: Question;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
};

/** Réponse de type `Date` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerDate = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionScalar;
  /** Réponse donnée, brute (sous forme de texte) */
  rawValue?: Maybe<Scalars['String']['output']>;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['DateTime']['output']>;
};

/** Réponse de type `FileUpload` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerFileUpload = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionFileUpload;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

export type AnswerInput = {
  /**
   *
   * Réponse à la question. Pour les questions à une seule réponse, ne mettre qu'un seul élément.
   *
   * - Pour les questions de type `Date`, utiliser le format `YYYY-mm-dd`
   * - Pour les questions de type `Time`, utiliser le format `HH:MM:ss`
   * - Pour les questions de type `Scale`, utiliser simplement le nombre répondu par l'utilisateur·ice
   * - Pour les questions de type `FileUpload`, utiliser la mutation [`answerFileQuestion`](#mutation/answerFileQuestion)
   *
   */
  answer: Array<Scalars['String']['input']>;
  /** ID de la question à laquelle répondre */
  question: Scalars['ID']['input'];
};

/** Réponse de type `LongText` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerLongText = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Number` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerNumber = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Réponse de type `Scale` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerScale = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Réponse donnée, entre 0 et 1 */
  normalizedValue?: Maybe<Scalars['Float']['output']>;
  /** Question à laquelle la réponse est associée */
  question: QuestionScale;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['Int']['output']>;
};

export type AnswerSearchResult = {
  answer: Answer;
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** Réponse de type `SelectMultiple` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerSelectMultiple = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionSelectMultiple;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Array<Scalars['String']['output']>>;
};

/** Réponse de type `SelectOne` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerSelectOne = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionSelectOne;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Text` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerText = Answer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Time` (voir [`QuestionKind`](#QuestionKind)) */
export type AnswerTime = Answer & {
  answer: Answer;
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<Registration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<User>;
  /** Formulaire auquel appartient la question */
  form: Form;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: QuestionScalar;
  /** Réponse donnée, brute (sous forme de texte) */
  rawValue?: Maybe<Scalars['String']['output']>;
  /** Section du formulaire auquel appartient la question */
  section: FormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['DateTime']['output']>;
};

/** Formats d'export des réponses */
export type AnswersExportFormats =
  /** Format CSV (séparateur de colonnes: virgule, séparateur de lignes: saut de ligne) */
  | 'CSV'
  /** Format TSV (séparateur de colonnes: tabulation, séparateur de lignes: saut de ligne) */
  | 'TSV';

/** Représente toutes les réponses d'un·e utilisateur·ice à un formulaire. Pratique pour grouper les réponses afin de les afficher dans un tableau */
export type AnswersOfUser = {
  answers: Array<Answer>;
  /** Correspond à la date de dernière réponse parmis les réponses */
  date: Scalars['DateTime']['output'];
  user: User;
};

/** Des données temporelles pour construire des graphiques d'atteintes de rate limiting. La résolution temporelle est d'une minute. */
export type ApiRateLimitHits = {
  /** Le nombre d'erreurs de rate-limiting à cette date */
  count: Scalars['Int']['output'];
  /** La date à laquelle les requêtes ont été faites */
  date: Scalars['DateTime']['output'];
  /** Le nom de la query ou mutation ou subscription */
  queryName: Scalars['String']['output'];
  /** Le type de requête effectuée */
  queryType: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  user?: Maybe<User>;
};

/** Des données temporelles pour construire des graphiques d'utilisation de l'API au cours du temps. La résolution temporelle est d'une minute. */
export type ApiUsage = {
  /** Le nombre de requêtes faites à cette date */
  count: Scalars['Int']['output'];
  /** La date à laquelle les requêtes ont été faites */
  date: Scalars['DateTime']['output'];
  /** Le nom de la query ou mutation ou subscription */
  queryName: Scalars['String']['output'];
  /** Le type de requête effectuée */
  queryType: ApiUsageQueryType;
  timestamp: Scalars['Int']['output'];
  user?: Maybe<User>;
};

/** Type de requête effectuée sur l'API */
export type ApiUsageQueryType =
  /** Modification de données, ou autre action diverses */
  | 'Mutation'
  /** Récupération de données */
  | 'Query'
  /** Abonnement à des données pour être informé en temps réel des changements */
  | 'Subscription';

/** An article is a post in a group */
export type Article = Commentable & Node & Pictured & Reactable & {
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  bodyPreview: Scalars['String']['output'];
  /** Vrai si l'utilisateur·ice connecté·e peut éditer le post (en considérant qu'iel ne va pas changer l'auteur·ice ou le groupe du post) */
  canBeEdited: Scalars['Boolean']['output'];
  comments: CommentsConnection;
  createdAt: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['ID']['output']>;
  group: Group;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  links: Array<Link>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  myReactions: Scalars['BooleanMap']['output'];
  notifiedAt?: Maybe<Scalars['DateTime']['output']>;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  publishedAt: Scalars['DateTime']['output'];
  reacted: Scalars['Boolean']['output'];
  reactionCounts: Scalars['Counts']['output'];
  reactions: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  visibility: Visibility;
};


/** An article is a post in a group */
export type ArticlecommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An article is a post in a group */
export type ArticlepictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** An article is a post in a group */
export type ArticlereactedArgs = {
  emoji: Scalars['String']['input'];
};


/** An article is a post in a group */
export type ArticlereactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type ArticleSearchResultType = {
  article: Article;
  highlightedTitle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

export type AwaitingValidationError = {
  message: Scalars['String']['output'];
};

/** A bar week is a week during which some groups takeover the bar staff */
export type BarWeek = Node & {
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt: Scalars['DateTime']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
};

export type BuildInfo = {
  /** Le hash du commit utilisé pour build l'API */
  commit: Scalars['String']['output'];
  /** La version actuelle de l'API (et de l'application) */
  version: Scalars['String']['output'];
};

/** A release in the changelog */
export type ChangelogRelease = {
  /** The changes of the release, grouped by category */
  changes: ReleaseChangesMaps;
  /** The date of the release */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** A short description of the release */
  description: Scalars['String']['output'];
  /** A short description of the release, in HTML. Safe from XSS. */
  descriptionHtml: Scalars['String']['output'];
  /** The version of the release */
  version: Scalars['String']['output'];
};

export type Comment = Node & Reactable & {
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  document?: Maybe<Document>;
  documentId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  inReplyTo?: Maybe<Comment>;
  inReplyToId?: Maybe<Scalars['ID']['output']>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  reacted: Scalars['Boolean']['output'];
  reactions: Scalars['Int']['output'];
  replies: Array<Comment>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CommentreactedArgs = {
  emoji: Scalars['String']['input'];
};


export type CommentreactionsArgs = {
  emoji: Scalars['String']['input'];
};

/** Une resource pouvant être commentée par les utilisateur·ice·s */
export type Commentable = {
  comments: CommentsConnection;
  /** L’identifiant de la resource commentée */
  id: Scalars['ID']['output'];
};


/** Une resource pouvant être commentée par les utilisateur·ice·s */
export type CommentablecommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentsConnection = {
  edges: Array<CommentsEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentsEdge = {
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CompleteSignupResult = User | UserCandidate;

export type ContributionOption = {
  descriptionHtml: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  offeredIn: School;
  paysFor: Array<StudentAssociation>;
  price: Scalars['Float']['output'];
};

/** A credential is a way to authenticate a user */
export type Credential = {
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
  type: CredentialType;
  user: User;
  userAgent: Scalars['String']['output'];
};

export type CredentialType =
  | 'Google'
  | 'Password'
  | 'Token';

export type DatabaseHealthCheck = {
  prisma: Scalars['Boolean']['output'];
};

export type Document = Commentable & Node & Reactable & {
  comments: CommentsConnection;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  /** Liste de chemins vers les fichiers représentant le sujet (ou la fiche de révision) */
  paperPaths: Array<Scalars['String']['output']>;
  reacted: Scalars['Boolean']['output'];
  reactions: Scalars['Int']['output'];
  schoolYear: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  /** Liste de chemins vers les fichiers représentant la correction. */
  solutionPaths: Array<Scalars['String']['output']>;
  subject?: Maybe<Subject>;
  subjectId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  type: DocumentType;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uploader?: Maybe<User>;
  uploaderId?: Maybe<Scalars['ID']['output']>;
};


export type DocumentcommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentreactedArgs = {
  emoji: Scalars['String']['input'];
};


export type DocumentreactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type DocumentSearchResult = {
  document: Document;
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  similarity: Scalars['Float']['output'];
};

export type DocumentType =
  | 'CourseNotes'
  | 'CourseSlides'
  | 'Exam'
  | 'Exercises'
  | 'GradedExercises'
  | 'Miscellaneous'
  | 'Practical'
  | 'PracticalExam'
  | 'Summary';

/** A email validation request */
export type EmailChange = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pending: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

/** The most basic error object, based on the base JavaScript Error object. */
export type Error = ErrorInterface & {
  message: Scalars['String']['output'];
};

/** Basic interface for all error types to implement. */
export type ErrorInterface = {
  message: Scalars['String']['output'];
};

export type EvenSearchResult = {
  event: Event;
  highlightedTitle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** An event is a date, time and place, as well as an optional ticket */
export type Event = Node & Pictured & Reactable & {
  articles: Array<Article>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  bannedUsers: Array<User>;
  beneficiary?: Maybe<LydiaAccount>;
  bookings: EventBookingsConnection;
  bookingsCounts: RegistrationsCounts;
  /** Renvoie un texte au format CSV contenant un export des réservations de l'évènement. */
  bookingsCsv: EventBookingsCsvResult;
  /** L'utilisateur·ice connecté·e peut modifier cet évènement */
  canEdit: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut ajouter, enlever ou modifier les droits des managers de cet évènement */
  canEditManagers: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut scanner les réservations de cet évènement */
  canScanBookings: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut voir les réservations de cet évènement */
  canSeeBookings: Scalars['Boolean']['output'];
  /** L'utilsateur·ice connecté·e peut voir les logs de cet évènement */
  canSeeLogs: Scalars['Boolean']['output'];
  capacity: Scalars['Int']['output'];
  coOrganizers: Array<Group>;
  contactMail: Scalars['String']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionPreview: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  /** Formulaires associés à l'événement */
  forms: Array<Form>;
  frequency: EventFrequency;
  group: Group;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** Vrai si l'évènement doit apparaître dans le mode kiosque */
  includeInKiosk: Scalars['Boolean']['output'];
  links: Array<Link>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  location: Scalars['String']['output'];
  /** Logs concernant cet évènement. Ne contient pas les logs concernant les réservations. */
  logs: EventLogsConnection;
  lydiaAccountId?: Maybe<Scalars['ID']['output']>;
  managers: Array<EventManager>;
  /** Réservations faites par et/ou pour l'utilisateur.ice connecté.e */
  myBookings: EventMyBookingsResult;
  myReactions: Scalars['BooleanMap']['output'];
  mySoonestShotgunOpensAt?: Maybe<Scalars['DateTime']['output']>;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  placesLeft?: Maybe<Scalars['Int']['output']>;
  profitsBreakdown: ProfitsBreakdown;
  reacted: Scalars['Boolean']['output'];
  reactionCounts: Scalars['Counts']['output'];
  reactions: Scalars['Int']['output'];
  recurringUntil?: Maybe<Scalars['DateTime']['output']>;
  searchBookings: Array<RegistrationSearchResult>;
  /** Vrai si le nombre de places restantes doit être affiché */
  showPlacesLeft: Scalars['Boolean']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt: Scalars['DateTime']['output'];
  ticket?: Maybe<Ticket>;
  ticketGroups: Array<TicketGroup>;
  tickets: Array<Ticket>;
  title: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  visibility: Visibility;
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventbookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventlogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventreactedArgs = {
  emoji: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventreactionsArgs = {
  emoji: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventsearchBookingsArgs = {
  q: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type EventticketArgs = {
  slug: Scalars['String']['input'];
};

export type EventBookingsConnection = {
  edges: Array<EventBookingsConnectionEdge>;
  nodes: Array<Registration>;
  pageInfo: PageInfo;
};

export type EventBookingsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Registration;
};

export type EventBookingsCsvResult = Error | EventBookingsCsvSuccess;

export type EventBookingsCsvSuccess = {
  data: Scalars['String']['output'];
};

export type EventFrequency =
  | 'Biweekly'
  | 'Monthly'
  | 'Once'
  | 'Weekly';

export type EventLogsConnection = {
  edges: Array<EventLogsConnectionEdge>;
  nodes: Array<LogEntry>;
  pageInfo: PageInfo;
};

export type EventLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: LogEntry;
};

/** An event manager is a user that can scan tickets, and may be able to manage the event */
export type EventManager = {
  canEdit: Scalars['Boolean']['output'];
  canEditPermissions: Scalars['Boolean']['output'];
  canVerifyRegistrations: Scalars['Boolean']['output'];
  event: Event;
  power: EventManagerPowerLevel;
  user: User;
};

export type EventManagerPowerLevel =
  | 'Edit'
  | 'EditPermissions'
  | 'ReadOnly'
  | 'ScanTickets';

export type EventMyBookingsResult = Error | EventMyBookingsSuccess;

export type EventMyBookingsSuccess = {
  data: Array<Registration>;
};

export type EventsByDay = {
  date: Scalars['DateTime']['output'];
  /** Évènements qui ont lieu (commencent) à ce jour */
  happening: Array<Event>;
  /** Évènements qui ont leur premier shotgun à ce jour */
  shotgunning: Array<Event>;
};

export type FamilyTree = {
  nesting: Scalars['String']['output'];
  users: Array<User>;
};

/** Un formulaire */
export type Form = Node & {
  /** Nombre de réponses au formulaire */
  answerCount: Scalars['Int']['output'];
  /** Réponses au formulaire */
  answers: FormAnswersConnection;
  /** Réponses au formulaire, groupées par utilisateur·ice. Ne contient pas de réponses dont l'utilisateur·ice est inconnu·e. */
  answersByUser: FormAnswersByUserConnection;
  /** Export des réponses au formulaires dans un format */
  answersExport: Scalars['String']['output'];
  /** Indique si l'utilisateur peut répondre au formulaire. */
  canAnswer: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur peut éditer le formulaire. */
  canEdit: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur·ice peut modifier ses réponses au formulaire. */
  canModifyAnswers: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur peut voir les statistiques des réponses au formulaire. */
  canSeeAnswerStats: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur peut voir les réponses au formulaire. */
  canSeeAnswers: Scalars['Boolean']['output'];
  /** Indique si l'utilisateur peut cocher ou décocher les cases à cocher à côté des réponses au formulaire. */
  canSetCheckboxes: Scalars['Boolean']['output'];
  checkboxesAreEnabled: Scalars['Boolean']['output'];
  /** Date de fermeture du formulaire. */
  closesAt?: Maybe<Scalars['DateTime']['output']>;
  /** Date de création du formulaire */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant créé le formulaire */
  createdBy?: Maybe<User>;
  /** Description en Markdown du formulaire. */
  description?: Maybe<Scalars['String']['output']>;
  /** Description en HTML du formulaire. */
  descriptionHtml: Scalars['String']['output'];
  /** Événement associé au formulaire */
  event?: Maybe<Event>;
  /** Groupe auquel le formulaire est associé */
  group?: Maybe<Group>;
  /** Vrai si le formulaire comporte des sections */
  hasSections: Scalars['Boolean']['output'];
  /** Préfixe de l'identifiant: `form:` */
  id: Scalars['ID']['output'];
  /** L'URL du Google Sheet des réponses lié à ce formulaire. Voir `createLinkedGoogleSheet` pour créer un Google Sheet lié au formulaire. */
  linkedGoogleSheetUrl?: Maybe<Scalars['String']['output']>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  /** Identifiant local du formulaire */
  localId: Scalars['String']['output'];
  /** Réponses de l'utilisateur·ice connecté·e à ce formulaire */
  myAnswers: Array<Answer>;
  /** Date d'ouverture du formulaire. */
  opensAt?: Maybe<Scalars['DateTime']['output']>;
  /** Questions du formulaire. Liste de toutes les questions, peut importe la section dans laquelle elles se trouvent. */
  questions: FormQuestionsConnection;
  searchAnswers: Array<AnswerSearchResult>;
  /** Une section du formulaire. */
  section: FormSection;
  /** Sections du formulaire. Un formulaire contient toujours au moins une section (sauf s'il n'y a aucune question). Uniquement accessible par celleux qui peuvent modifier le formulaire. Utiliser `nextSection` pour afficher une section dans le but d'y répondre. */
  sections: Array<FormSection>;
  title: Scalars['String']['output'];
  /** Date de dernière mise à jour du formulaire */
  updatedAt: Scalars['DateTime']['output'];
  /** Visibilité du formulaire */
  visibility: Visibility;
};


/** Un formulaire */
export type FormanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Un formulaire */
export type FormanswersByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};


/** Un formulaire */
export type FormanswersExportArgs = {
  format?: AnswersExportFormats;
};


/** Un formulaire */
export type FormquestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Un formulaire */
export type FormsearchAnswersArgs = {
  q: Scalars['String']['input'];
  similarityCutoff?: InputMaybe<Scalars['Float']['input']>;
};


/** Un formulaire */
export type FormsectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FormAnswersByUserConnection = {
  edges: Array<FormAnswersByUserConnectionEdge>;
  nodes: Array<AnswersOfUser>;
  pageInfo: PageInfo;
};

export type FormAnswersByUserConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: AnswersOfUser;
};

export type FormAnswersConnection = {
  edges: Array<FormAnswersConnectionEdge>;
  nodes: Array<Answer>;
  pageInfo: PageInfo;
};

export type FormAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Answer;
};

export type FormQuestionsConnection = {
  edges: Array<FormQuestionsConnectionEdge>;
  nodes: Array<Question>;
  pageInfo: PageInfo;
};

export type FormQuestionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Question;
};

export type FormSearchResult = {
  form: Form;
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** Une section d'un formulaire. Les sections sont utiles pour séparer les questions en plusieurs parties, dont certaines peuvent être affichées selon des réponses à des questions précédentes */
export type FormSection = {
  /** Réponses à cette section */
  answers: FormSectionAnswersConnection;
  /** Description en Markdown de la section */
  description: Scalars['String']['output'];
  /** Description en HTML de la section */
  descriptionHtml: Scalars['String']['output'];
  /** Formulaire auquel appartient la section */
  form: Form;
  id: Scalars['ID']['output'];
  /** Identifiant local de la section du formulaire */
  localId: Scalars['String']['output'];
  /** Section suivante dans le formulaire, si il y en a une. (Sinon, c'est que c'est la dernière section). Dépend du fait que des sections soit cachées à l'utilisateur (voir `restrictedToGroups`), ou que une répond à une question provoque le passaage à une autre section (voir `goToSection`)  */
  nextSection?: Maybe<FormSection>;
  /** Ordre de la section dans le formulaire */
  order: Scalars['Int']['output'];
  /** Questions dans section */
  questions: Array<Question>;
  /** Si non vide, seul·e·s les membres des groupes spécifiés peuvent accéder à cette section.  */
  restrictedToGroups: Array<Group>;
  /** Titre de la section */
  title: Scalars['String']['output'];
};


/** Une section d'un formulaire. Les sections sont utiles pour séparer les questions en plusieurs parties, dont certaines peuvent être affichées selon des réponses à des questions précédentes */
export type FormSectionanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FormSectionAnswersConnection = {
  edges: Array<FormSectionAnswersConnectionEdge>;
  nodes: Array<Answer>;
  pageInfo: PageInfo;
};

export type FormSectionAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Answer;
};

/** Requests to become someone's godchild. Gets deleted once the request has been accepted (or denied). godchild is the requester, godparent is the requested. */
export type GodparentRequest = {
  createdAt: Scalars['DateTime']['output'];
  godchild: User;
  godparent: User;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** A group is a collection of users */
export type Group = Node & Pictured & {
  address: Scalars['String']['output'];
  /** All the ancestors of this group, from the current group to the root. */
  ancestors: Array<Group>;
  articles: Array<Article>;
  boardMembers: Array<GroupMember>;
  /** Vrai si l'utilisateur·ice connecté·e peut modifier les informations du groupe */
  canEditDetails: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut éditer (créer ou modifier) les pages du groupe */
  canEditPages: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut lister les pages du groupe */
  canListPages: Scalars['Boolean']['output'];
  children: Array<Group>;
  coOrganizedEvents: Array<Event>;
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  events: GroupEventsConnection;
  familyChildren: Array<Group>;
  /** Helper field to get a whole tree without processing all groups\nTo be set to the group's id itself for root groups. */
  familyId?: Maybe<Scalars['ID']['output']>;
  /** Formulaires associés au groupe */
  forms: Array<Form>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  ldapUid: Scalars['String']['output'];
  links: Array<Link>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  longDescription: Scalars['String']['output'];
  longDescriptionHtml: Scalars['String']['output'];
  /** Comptes Lydia du groupe */
  lydiaAccounts: Array<LydiaAccount>;
  mailingList: Scalars['String']['output'];
  members: Array<GroupMember>;
  name: Scalars['String']['output'];
  ownEvents: Array<Event>;
  /** La page associée au groupe */
  page?: Maybe<Page>;
  /** Les pages associées au groupe */
  pages: PagesConnection;
  /** Parent group, from which this group inherits its permissions */
  parent?: Maybe<Group>;
  parentId?: Maybe<Scalars['ID']['output']>;
  pictureFile: Scalars['String']['output'];
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  president?: Maybe<GroupMember>;
  /** Related clubs */
  related: Array<Group>;
  roomIsOpen: Scalars['Boolean']['output'];
  /** Family root, only created for performance reasons */
  root?: Maybe<Group>;
  secretaries: Array<GroupMember>;
  selfJoinable: Scalars['Boolean']['output'];
  services: Array<Service>;
  /** Article de la boutique du groupe */
  shopItem?: Maybe<ShopItem>;
  shopItems: GroupShopItemsConnection;
  shopOrders: Array<ShopPayment>;
  studentAssociation?: Maybe<StudentAssociation>;
  treasurers: Array<GroupMember>;
  type: GroupType;
  uid: Scalars['String']['output'];
  vicePresidents: Array<GroupMember>;
  website: Scalars['String']['output'];
};


/** A group is a collection of users */
export type GroupeventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A group is a collection of users */
export type GrouppageArgs = {
  path: Scalars['String']['input'];
};


/** A group is a collection of users */
export type GrouppagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A group is a collection of users */
export type GrouppictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** A group is a collection of users */
export type GroupshopItemArgs = {
  id: Scalars['LocalID']['input'];
};


/** A group is a collection of users */
export type GroupshopItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type GroupEventsConnection = {
  edges: Array<GroupEventsConnectionEdge>;
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type GroupEventsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Event;
};

/** The intermediate model between users and groups */
export type GroupMember = {
  canEditArticles: Scalars['Boolean']['output'];
  canEditMembers: Scalars['Boolean']['output'];
  canScanEvents: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  group: Group;
  groupId: Scalars['ID']['output'];
  isDeveloper: Scalars['Boolean']['output'];
  member: User;
  memberId: Scalars['ID']['output'];
  president: Scalars['Boolean']['output'];
  secretary: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  treasurer: Scalars['Boolean']['output'];
  vicePresident: Scalars['Boolean']['output'];
};

export type GroupSearchResult = {
  group: Group;
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

export type GroupShopItemsConnection = {
  edges: Array<GroupShopItemsConnectionEdge>;
  nodes: Array<ShopItem>;
  pageInfo: PageInfo;
};

export type GroupShopItemsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ShopItem;
};

export type GroupType =
  | 'Association'
  | 'Club'
  | 'Group'
  | 'Integration'
  | 'List'
  | 'StudentAssociationSection';

/** Results of a health self-check */
export type HealthCheck = {
  database: DatabaseHealthCheck;
  ldap: LdapHealthCheck;
  mail: MailHealthCheck;
  redis: RedisHealthCheck;
};

/** A Gitlab issue */
export type Issue = {
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  comments: Array<IssueComment>;
  deployedIn: Scalars['String']['output'];
  /** Expressed from 0 to 1 */
  difficulty?: Maybe<Scalars['Float']['output']>;
  duplicatedFrom?: Maybe<Scalars['Int']['output']>;
  /** Expressed from 0 to 1 */
  importance?: Maybe<Scalars['Float']['output']>;
  number: Scalars['Int']['output'];
  state: IssueState;
  /** The date at which the issue was submitted */
  submittedAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** A Gitlab issue comment */
export type IssueComment = {
  /** The date at which the comment was added */
  addedAt: Scalars['DateTime']['output'];
  authorAvatarUrl: Scalars['String']['output'];
  authorGitlabUrl: Scalars['String']['output'];
  authorName: Scalars['String']['output'];
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
};

export type IssueState =
  | 'Closed'
  | 'Deployed'
  | 'Open';

export type LdapHealthCheck = {
  /** Whether the LDAP internal client is ready */
  internal: Scalars['Boolean']['output'];
  /** Whether the LDAP school client is ready */
  school: Scalars['Boolean']['output'];
};

/** A single external link */
export type Link = Node & {
  computedValue: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LinkInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** A log entry is a log of an action that happened on the website */
export type LogEntry = Node & {
  action: Scalars['String']['output'];
  area: Scalars['String']['output'];
  happenedAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  message: Scalars['String']['output'];
  target?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type LogoSourceType =
  | 'ExternalLink'
  | 'GroupLogo'
  | 'Icon'
  | 'InternalLink';

/** A Lydia account */
export type LydiaAccount = {
  events: Array<Event>;
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  studentAssociation?: Maybe<StudentAssociation>;
  studentAssociationId?: Maybe<Scalars['ID']['output']>;
};

export type MailHealthCheck = {
  /** Whether the SMTP client is ready */
  smtp: Scalars['Boolean']['output'];
};

/** A school syllabus */
export type Major = {
  id: Scalars['ID']['output'];
  ldapSchool?: Maybe<School>;
  minors: Array<Minor>;
  name: Scalars['String']['output'];
  schools: Array<School>;
  shortName: Scalars['String']['output'];
  subjects: Array<Subject>;
  uid: Scalars['String']['output'];
};


/** A school syllabus */
export type MajorsubjectsArgs = {
  forApprentices?: InputMaybe<Scalars['Boolean']['input']>;
  yearTier?: InputMaybe<Scalars['Int']['input']>;
};

export type ManagerOfEventInput = {
  canEdit: Scalars['Boolean']['input'];
  canEditPermissions: Scalars['Boolean']['input'];
  canVerifyRegistrations: Scalars['Boolean']['input'];
  userUid: Scalars['String']['input'];
};

export type Minor = Node & {
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  majors: Array<Major>;
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  subjects: Array<Subject>;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  users: Array<User>;
  yearTier: Scalars['Int']['output'];
};

/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type Mutation = {
  acceptRegistration: MutationAcceptRegistrationResult;
  /** Marks the user as having seen the given version's changelog. */
  acknowledgeChangelog: Scalars['Boolean']['output'];
  /** Activate a third-party app. Only admins can do this. */
  activateApp: Scalars['Boolean']['output'];
  /** Ajouter un fichier à une page. Permet notamment d'ajouter des images pour s'en servir dans le contenu de la page. */
  addFileToPage: MutationAddFileToPageResult;
  addGroupMember: MutationAddGroupMemberResult;
  /** Répondre à une question de type `FileUpload` en uploadant un fichier */
  answerFileQuestion: AnswerFileUpload;
  answerFormSection: MutationAnswerFormSectionResult;
  /**
   *
   * Authorize a third-party client to access the user's data.
   * Returns an access code.
   *
   * Use the frontend's /authorize endpoint instead of this, as it requires already being logged-in.
   *
   * Do a `GET` request to `https://churros.inpt.fr/authorize?client_id=<clientId>&redirect_uri=<redirectUri>&response_type=code&state=<state>` with:
   *
   * - `<clientId>`: The client ID of the app. See registerApp to get this.
   * - `<redirectUri>`: The URL that you want to redirect the user to. The frontend uses this on /authorize to redirect users to `<redirectUri>?code=<return value of this mutation>`
   * - `<state>`: A random string generated from personal information used to prevent CSRF attacks.
   *
   * Use that code to get an access token with /token:
   *
   * Do a `POST` request to `https://churros.inpt.fr/token` with a `application/x-www-form-urlencoded` body with the following fields:
   *
   * - `grant_type`: `authorization_code`
   * - `code`: The code returned by this endpoint
   * - `client_id`: The client ID of the app
   * - `client_secret`: The client secret of the app
   * - `redirect_uri`: The redirect URI used in this request
   *
   */
  authorize: MutationAuthorizeResult;
  cancelPendingContribution: Scalars['Boolean']['output'];
  cancelRegistration: MutationCancelRegistrationResult;
  checkIfRegistrationIsPaid: Scalars['Boolean']['output'];
  claimPromotionCode: Scalars['Boolean']['output'];
  completeRegistration: MutationCompleteRegistrationResult;
  contribute: MutationContributeResult;
  createBot: User;
  createGitlabIssue: Scalars['Int']['output'];
  /** Créer un pass Google Wallet pour une réservation donnée. Renvoie l'URL a utiliser pour ajouter le pass à Google Wallet. */
  createGoogleWalletPass: Scalars['String']['output'];
  /** Crée une feuille Google Sheets (si elle n'existe pas déjà) qui contiendra les réponses au formulaire (et sera mise à jour automatiquement). Renvoie l'URL de la feuille Google Sheets. */
  createLinkedGoogleSheet: Scalars['String']['output'];
  /** Démarre une procédure de réinitialisation de mot de passe pour l'utilisateur associé à l'adresse e-mail ou l'uid fournie. Renvoie `true` même si l'utilisateur n'existe pas. */
  createPasswordReset: MutationCreatePasswordResetResult;
  /** Créer un lien d'inscription rapide */
  createQuickSignup: QuickSignup;
  /** Deactivate a third-party app. Only admins can do this. */
  deactivateApp: Scalars['Boolean']['output'];
  deleteAnnouncement: Scalars['Boolean']['output'];
  deleteArticle: Scalars['Boolean']['output'];
  deleteArticlePicture: Scalars['Boolean']['output'];
  deleteBarWeek: Scalars['Boolean']['output'];
  deleteComment: Comment;
  deleteDocument: Scalars['Boolean']['output'];
  deleteDocumentFile: Scalars['Boolean']['output'];
  deleteEvent: Scalars['Boolean']['output'];
  deleteEventManager: Scalars['Boolean']['output'];
  deleteEventPicture: Scalars['Boolean']['output'];
  deleteGodchild: Scalars['Boolean']['output'];
  /** Deletes a pending godparent request. If accept is true, the request will be accepted (and the godparent of the requester will be changed), otherwise it will be rejected (the godparent of the requester won't be changed) */
  deleteGodparentRequest: GodparentRequest;
  deleteGroup: Scalars['Boolean']['output'];
  deleteGroupMember: Scalars['Boolean']['output'];
  deleteGroupPicture: Scalars['Boolean']['output'];
  deleteItemPicture: Scalars['Boolean']['output'];
  deleteNotificationSubscription: Scalars['Boolean']['output'];
  /** Supprime une page existante. On peut renseigner l'identifiant de la page ou son chemin ainsi que son groupe ou AE d'appartenance. */
  deletePage: MutationDeletePageResult;
  deleteQuickSignup: QuickSignup;
  deleteReaction: Scalars['Boolean']['output'];
  deleteRegistration: Scalars['Boolean']['output'];
  deleteSchoolPicture: Scalars['String']['output'];
  deleteShopItem: MutationDeleteShopItemResult;
  deleteShopOption: Scalars['Boolean']['output'];
  deleteTicket: Scalars['Boolean']['output'];
  deleteTicketGroup: Scalars['Boolean']['output'];
  deleteToken: Scalars['Boolean']['output'];
  deleteUserPicture: Scalars['Boolean']['output'];
  /** Update a third-party app's details */
  editApp: ThirdPartyApp;
  finishPaypalRegistrationPayment: MutationFinishPaypalRegistrationPaymentResult;
  kioskReload: Scalars['Boolean']['output'];
  /** Logs a user in and returns a session token. */
  login: MutationLoginResult;
  /** Logs a user out and invalidates the session token. */
  logout: Scalars['Boolean']['output'];
  /** Envoie une copie des réponses de l'utilisateur·ice connecté·e à ce formulaire par email. Renvoie l'adresse mail à laquelle les réponses ont été envoyées. */
  mailFormAnswers: MutationMailFormAnswersResult;
  mergeDocuments: Document;
  opposeRegistration: MutationOpposeRegistrationResult;
  /** When paying with Paypal, returns the order id for a capture to finish the payment */
  paidRegistration: MutationPaidRegistrationResult;
  paidShopPayment: MutationPaidShopPaymentResult;
  refuseRegistration: Scalars['Boolean']['output'];
  /** Register a third-party OAuth2 client. Returns the client secret. The client secret cannot be retrieved at any other time. Use refreshAppSecret to rotate your client secret. */
  registerApp: ThirdPartyAppRegistrationResponse;
  /** Enregistrer un token OAuth2 Google pour l'utilisateur connecté. */
  registerGoogleCredential: MutationRegisterGoogleCredentialResult;
  /** Supprimer un fichier d'une page. */
  removeFileFromPage: MutationRemoveFileFromPageResult;
  renameSession: Scalars['Boolean']['output'];
  requestEmailChange: MutationRequestEmailChangeResult;
  resetPassword: MutationResetPasswordResult;
  /** Révoque l'accès d'une application au compte utilisateur connecté. Renvoie `true` si l'opération a réussi. */
  revokeAuthorization: Scalars['Boolean']['output'];
  /** Rotate a third-party app's secret */
  rotateAppSecret: Scalars['String']['output'];
  selfJoinGroup: GroupMember;
  /**
   * Envoie une notification à l'utilisateur connecté. Limité à une notification par heure. Si l'utilisateur a désactivé les notifications de type “Autres” pour le groupe responsable du [client OAuth](/oauth) faisant la requête, la notification ne lui sera pas envoyée.
   *
   * - **Rate limit:** 1/heure
   */
  sendNotification: Scalars['Boolean']['output'];
  setDocumentFileIsSolution: Scalars['Boolean']['output'];
  /** Coche ou décoche la case à cocher à côté des réponses à un formulaire pour un·e utilisateur·ice. */
  setFormAnswersCheckbox: Form;
  startRegistration: MutationStartRegistrationResult;
  syncUserLdap: Scalars['Boolean']['output'];
  testNotification: Scalars['Boolean']['output'];
  toggleReaction: Reactable;
  updateArticlePicture: Scalars['String']['output'];
  updateEventPicture: Scalars['String']['output'];
  updateGroupPicture: Scalars['String']['output'];
  updateItemPicture: Picture;
  updateNotificationSettings: Array<NotificationChannel>;
  /** Changer si la salle d'un groupe est fermée ou ouvert */
  updateRoomOpenState: Scalars['Boolean']['output'];
  updateSchool: School;
  updateSchoolPicture: Scalars['String']['output'];
  updateStudentAssociationPicture: Scalars['String']['output'];
  updateSubjectsExamDates: Scalars['Boolean']['output'];
  updateUser: MutationUpdateUserResult;
  updateUserCandidate: MutationUpdateUserCandidateResult;
  updateUserPermissions: User;
  updateUserPicture: Scalars['String']['output'];
  uploadDocumentFile: Scalars['String']['output'];
  upsertAnnouncement: MutationUpsertAnnouncementResult;
  /** Crée ou met à jour un post */
  upsertArticle: MutationUpsertArticleResult;
  upsertBarWeek: MutationUpsertBarWeekResult;
  upsertComment: Comment;
  upsertDocument: MutationUpsertDocumentResult;
  upsertEvent: MutationUpsertEventResult;
  /** Crée ou met à jour un formulaire. À la création, une section de formulaire vide sans titre est automatiquement créée. C'est pratique pour les formulaires sans section. */
  upsertForm: Form;
  /** Crée ou met à jour une section de formulaire. */
  upsertFormSection: FormSection;
  upsertGodparentRequest: MutationUpsertGodparentRequestResult;
  upsertGroup: MutationUpsertGroupResult;
  upsertGroupMember: GroupMember;
  upsertLydiaAccount: LydiaAccount;
  upsertManagersOfEvent: Array<EventManager>;
  upsertNotificationSubscription: NotificationSubscription;
  /** Crée ou met à jour une page. */
  upsertPage: MutationUpsertPageResult;
  /** Crée ou met à jour une question. */
  upsertQuestion: Question;
  upsertReaction: Scalars['Int']['output'];
  upsertRegistration: MutationUpsertRegistrationResult;
  upsertService: MutationUpsertServiceResult;
  upsertShopItem: MutationUpsertShopItemResult;
  upsertShopOptions: Scalars['Boolean']['output'];
  upsertShopPayment: MutationUpsertShopPaymentResult;
  upsertTicketGroup: TicketGroup;
  usePasswordReset: MutationUsePasswordResetResult;
  validateEmail: MutationValidateEmailResult;
  verifyBooking: MutationVerifyBookingResult;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationacceptRegistrationArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationacknowledgeChangelogArgs = {
  version?: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationactivateAppArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationaddFileToPageArgs = {
  file: Scalars['File']['input'];
  page: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationaddGroupMemberArgs = {
  groupUid: Scalars['String']['input'];
  title: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationanswerFileQuestionArgs = {
  answer: Scalars['File']['input'];
  question: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationanswerFormSectionArgs = {
  answers: Array<AnswerInput>;
  section: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationauthorizeArgs = {
  clientId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcancelPendingContributionArgs = {
  optionId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcancelRegistrationArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcheckIfRegistrationIsPaidArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationclaimPromotionCodeArgs = {
  code: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcompleteRegistrationArgs = {
  address: Scalars['String']['input'];
  apprentice: Scalars['Boolean']['input'];
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  cededImageRightsToTVn7: Scalars['Boolean']['input'];
  firstName: Scalars['String']['input'];
  graduationYear: Scalars['Int']['input'];
  lastName: Scalars['String']['input'];
  majorId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  token: Scalars['String']['input'];
  uid: Scalars['UID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcontributeArgs = {
  optionId: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreateBotArgs = {
  major?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreateGitlabIssueArgs = {
  description: Scalars['String']['input'];
  isBug: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreateGoogleWalletPassArgs = {
  code: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreateLinkedGoogleSheetArgs = {
  form: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreatePasswordResetArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationcreateQuickSignupArgs = {
  school: Scalars['String']['input'];
  validUntil: Scalars['DateTime']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeactivateAppArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteAnnouncementArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteArticlePictureArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteBarWeekArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteDocumentArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteDocumentFileArgs = {
  documentId: Scalars['ID']['input'];
  filename: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteEventArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteEventManagerArgs = {
  eventId: Scalars['ID']['input'];
  user: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteEventPictureArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteGodchildArgs = {
  godchildUid: Scalars['String']['input'];
  parentUid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteGodparentRequestArgs = {
  accept: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteGroupArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteGroupMemberArgs = {
  groupId: Scalars['ID']['input'];
  memberId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteGroupPictureArgs = {
  dark: Scalars['Boolean']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteItemPictureArgs = {
  groupUid: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  pictureId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteNotificationSubscriptionArgs = {
  endpoint: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeletePageArgs = {
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  studentAssociation?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteQuickSignupArgs = {
  code: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteReactionArgs = {
  articleId?: InputMaybe<Scalars['ID']['input']>;
  commentId?: InputMaybe<Scalars['ID']['input']>;
  documentId?: InputMaybe<Scalars['ID']['input']>;
  emoji: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteRegistrationArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteSchoolPictureArgs = {
  id: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteShopItemArgs = {
  groupUid: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteShopOptionArgs = {
  optionIds: Array<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteTicketArgs = {
  force?: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteTicketGroupArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteTokenArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationdeleteUserPictureArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationeditAppArgs = {
  allowedRedirectUris?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerGroupUid?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationfinishPaypalRegistrationPaymentArgs = {
  orderId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationkioskReloadArgs = {
  studentAssociation: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationloginArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationmailFormAnswersArgs = {
  formId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationmergeDocumentsArgs = {
  from: Array<Scalars['ID']['input']>;
  into: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationopposeRegistrationArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationpaidRegistrationArgs = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  phone?: InputMaybe<Scalars['String']['input']>;
  regId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationpaidShopPaymentArgs = {
  paymentMethod?: InputMaybe<PaymentMethod>;
  phone?: InputMaybe<Scalars['String']['input']>;
  shopPaymentId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationrefuseRegistrationArgs = {
  email: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationregisterAppArgs = {
  allowedRedirectUris: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ownerGroupUid: Scalars['String']['input'];
  website: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationregisterGoogleCredentialArgs = {
  code: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationremoveFileFromPageArgs = {
  filename: Scalars['String']['input'];
  page: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationrenameSessionArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationrequestEmailChangeArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationresetPasswordArgs = {
  disconnectAll: Scalars['Boolean']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationrevokeAuthorizationArgs = {
  clientId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationrotateAppSecretArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationselfJoinGroupArgs = {
  uid: Scalars['UID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationsendNotificationArgs = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationsetDocumentFileIsSolutionArgs = {
  documentId: Scalars['ID']['input'];
  filename: Scalars['String']['input'];
  isSolution: Scalars['Boolean']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationsetFormAnswersCheckboxArgs = {
  checked: Scalars['Boolean']['input'];
  form: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationstartRegistrationArgs = {
  email: Scalars['String']['input'];
  quickSignupCode?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationsyncUserLdapArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationtestNotificationArgs = {
  subscriptionEndpoint: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationtoggleReactionArgs = {
  articleId?: InputMaybe<Scalars['ID']['input']>;
  commentId?: InputMaybe<Scalars['ID']['input']>;
  documentId?: InputMaybe<Scalars['ID']['input']>;
  emoji: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateArticlePictureArgs = {
  file: Scalars['File']['input'];
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateEventPictureArgs = {
  file: Scalars['File']['input'];
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateGroupPictureArgs = {
  dark: Scalars['Boolean']['input'];
  file: Scalars['File']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateItemPictureArgs = {
  file: Scalars['File']['input'];
  groupUid: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateNotificationSettingsArgs = {
  enabledChannels: Array<NotificationChannel>;
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateRoomOpenStateArgs = {
  groupUid: Scalars['String']['input'];
  openRoom: Scalars['Boolean']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateSchoolArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  aliasMailDomains: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  studentMailDomain: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateSchoolPictureArgs = {
  file: Scalars['File']['input'];
  id: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateStudentAssociationPictureArgs = {
  file: Scalars['File']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateUserArgs = {
  address: Scalars['String']['input'];
  apprentice: Scalars['Boolean']['input'];
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  cededImageRightsToTVn7: Scalars['Boolean']['input'];
  contributesWith?: InputMaybe<Array<Scalars['ID']['input']>>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  godparentUid?: InputMaybe<Scalars['String']['input']>;
  graduationYear?: InputMaybe<Scalars['Int']['input']>;
  lastName: Scalars['String']['input'];
  links: Array<LinkInput>;
  majorId?: InputMaybe<Scalars['ID']['input']>;
  minorId?: InputMaybe<Scalars['ID']['input']>;
  nickname: Scalars['String']['input'];
  otherEmails: Array<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  uid: Scalars['UID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateUserCandidateArgs = {
  address: Scalars['String']['input'];
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  cededImageRightsToTVn7: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  graduationYear: Scalars['Int']['input'];
  lastName: Scalars['String']['input'];
  majorId: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  register: Scalars['Boolean']['input'];
  uid: Scalars['UID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateUserPermissionsArgs = {
  canAccessDocuments: Scalars['Boolean']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupdateUserPictureArgs = {
  file: Scalars['File']['input'];
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationuploadDocumentFileArgs = {
  documentId: Scalars['ID']['input'];
  file: Scalars['File']['input'];
  solution: Scalars['Boolean']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertAnnouncementArgs = {
  body: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  startsAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  warning: Scalars['Boolean']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertArticleArgs = {
  body: Scalars['String']['input'];
  event?: InputMaybe<Scalars['ID']['input']>;
  group: Scalars['UID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  links?: Array<LinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  visibility: Visibility;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertBarWeekArgs = {
  description: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  groupsUids: Array<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startsAt: Scalars['DateTime']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertCommentArgs = {
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  inReplyToId?: InputMaybe<Scalars['ID']['input']>;
  resourceId?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertDocumentArgs = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  schoolYear: Scalars['Int']['input'];
  subject: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: DocumentType;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertEventArgs = {
  bannedUsers: Array<Scalars['String']['input']>;
  coOrganizers: Array<Scalars['String']['input']>;
  contactMail: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endsAt: Scalars['DateTime']['input'];
  frequency: EventFrequency;
  groupUid: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeInKiosk?: InputMaybe<Scalars['Boolean']['input']>;
  links: Array<LinkInput>;
  location: Scalars['String']['input'];
  lydiaAccountId?: InputMaybe<Scalars['String']['input']>;
  managers: Array<ManagerOfEventInput>;
  recurringUntil?: InputMaybe<Scalars['DateTime']['input']>;
  showPlacesLeft?: InputMaybe<Scalars['Boolean']['input']>;
  startsAt: Scalars['DateTime']['input'];
  ticketGroups: Array<TicketGroupInput>;
  tickets: Array<TicketInput>;
  title: Scalars['String']['input'];
  visibility: Visibility;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertFormArgs = {
  input: MutationUpsertFormInput;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertFormSectionArgs = {
  input: MutationUpsertFormSectionInput;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertGodparentRequestArgs = {
  godchildUid: Scalars['String']['input'];
  godparentUid: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertGroupArgs = {
  input: UpsertGroupInput;
  uid?: InputMaybe<Scalars['UID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertGroupMemberArgs = {
  canEditArticles: Scalars['Boolean']['input'];
  canEditMembers: Scalars['Boolean']['input'];
  canScanEvents: Scalars['Boolean']['input'];
  groupId: Scalars['ID']['input'];
  isDeveloper: Scalars['Boolean']['input'];
  memberId: Scalars['ID']['input'];
  president: Scalars['Boolean']['input'];
  secretary: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  treasurer: Scalars['Boolean']['input'];
  vicePresident: Scalars['Boolean']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertLydiaAccountArgs = {
  groupUid: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  privateToken: Scalars['String']['input'];
  vendorToken: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertManagersOfEventArgs = {
  eventId: Scalars['ID']['input'];
  managers: Array<ManagerOfEventInput>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertNotificationSubscriptionArgs = {
  endpoint: Scalars['String']['input'];
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  keys: NotificationSubscriptionKeysInput;
  name: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertPageArgs = {
  body: Scalars['String']['input'];
  group?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  studentAssociation?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertQuestionArgs = {
  input: MutationUpsertQuestionInput;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertReactionArgs = {
  articleId?: InputMaybe<Scalars['ID']['input']>;
  commentId?: InputMaybe<Scalars['ID']['input']>;
  documentId?: InputMaybe<Scalars['ID']['input']>;
  emoji: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertRegistrationArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paid: Scalars['Boolean']['input'];
  paymentMethod?: InputMaybe<PaymentMethod>;
  ticketId: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertServiceArgs = {
  description: Scalars['String']['input'];
  groupUid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  importance?: InputMaybe<Scalars['Int']['input']>;
  logo: Scalars['String']['input'];
  logoSourceType: LogoSourceType;
  name: Scalars['String']['input'];
  schoolUid?: InputMaybe<Scalars['String']['input']>;
  studentAssociationUid?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertShopItemArgs = {
  description: Scalars['String']['input'];
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupUid: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  lydiaAccounId?: InputMaybe<Scalars['String']['input']>;
  max: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  paymentMethods: Array<PaymentMethod>;
  price: Scalars['Float']['input'];
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  stock: Scalars['Int']['input'];
  visibility: Visibility;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertShopOptionsArgs = {
  itemOptions: Array<ShopItemOptionInput>;
  shopItemId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertShopPaymentArgs = {
  answers: Array<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  shopItemId: Scalars['String']['input'];
  userUid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationupsertTicketGroupArgs = {
  capacity: Scalars['Int']['input'];
  eventId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  tickets: Array<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationusePasswordResetArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationvalidateEmailArgs = {
  token: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200 / 10 minutes (par utilisateur·ice et par query) */
export type MutationverifyBookingArgs = {
  event: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type MutationAcceptRegistrationResult = Error | MutationAcceptRegistrationSuccess;

export type MutationAcceptRegistrationSuccess = {
  data: User;
};

export type MutationAddFileToPageResult = Error | MutationAddFileToPageSuccess | ZodError;

export type MutationAddFileToPageSuccess = {
  data: Page;
};

export type MutationAddGroupMemberResult = Error | MutationAddGroupMemberSuccess;

export type MutationAddGroupMemberSuccess = {
  data: GroupMember;
};

export type MutationAnswerFormSectionResult = Error | MutationAnswerFormSectionSuccess;

export type MutationAnswerFormSectionSuccess = {
  data: Array<Answer>;
};

export type MutationAuthorizeResult = Error | MutationAuthorizeSuccess | OAuth2Error;

export type MutationAuthorizeSuccess = {
  data: Scalars['String']['output'];
};

export type MutationCancelRegistrationResult = Error | MutationCancelRegistrationSuccess;

export type MutationCancelRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationCompleteRegistrationResult = Error | MutationCompleteRegistrationSuccess | ZodError;

export type MutationCompleteRegistrationSuccess = {
  data: CompleteSignupResult;
};

export type MutationContributeResult = Error | MutationContributeSuccess;

export type MutationContributeSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationCreatePasswordResetResult = Error | MutationCreatePasswordResetSuccess;

export type MutationCreatePasswordResetSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationDeletePageResult = Error | MutationDeletePageSuccess | ZodError;

export type MutationDeletePageSuccess = {
  data: Page;
};

export type MutationDeleteShopItemResult = Error | MutationDeleteShopItemSuccess;

export type MutationDeleteShopItemSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationFinishPaypalRegistrationPaymentResult = Error | MutationFinishPaypalRegistrationPaymentSuccess;

export type MutationFinishPaypalRegistrationPaymentSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationLoginResult = AwaitingValidationError | Error | MutationLoginSuccess;

export type MutationLoginSuccess = {
  data: Credential;
};

export type MutationMailFormAnswersResult = Error | MutationMailFormAnswersSuccess;

export type MutationMailFormAnswersSuccess = {
  data: Scalars['String']['output'];
};

export type MutationOpposeRegistrationResult = Error | MutationOpposeRegistrationSuccess;

export type MutationOpposeRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationPaidRegistrationResult = Error | MutationPaidRegistrationSuccess;

export type MutationPaidRegistrationSuccess = {
  data: Scalars['String']['output'];
};

export type MutationPaidShopPaymentResult = Error | MutationPaidShopPaymentSuccess;

export type MutationPaidShopPaymentSuccess = {
  data: ShopPayment;
};

export type MutationRegisterGoogleCredentialResult = Error | MutationRegisterGoogleCredentialSuccess;

export type MutationRegisterGoogleCredentialSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationRemoveFileFromPageResult = Error | MutationRemoveFileFromPageSuccess | ZodError;

export type MutationRemoveFileFromPageSuccess = {
  data: Page;
};

export type MutationRequestEmailChangeResult = Error | MutationRequestEmailChangeSuccess;

export type MutationRequestEmailChangeSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationResetPasswordResult = Error | MutationResetPasswordSuccess;

export type MutationResetPasswordSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationStartRegistrationResult = Error | MutationStartRegistrationSuccess | ZodError;

export type MutationStartRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationUpdateUserCandidateResult = Error | MutationUpdateUserCandidateSuccess | ZodError;

export type MutationUpdateUserCandidateSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationUpdateUserResult = Error | MutationUpdateUserSuccess;

export type MutationUpdateUserSuccess = {
  data: User;
};

export type MutationUpsertAnnouncementResult = Error | MutationUpsertAnnouncementSuccess | ZodError;

export type MutationUpsertAnnouncementSuccess = {
  data: Announcement;
};

export type MutationUpsertArticleResult = Error | MutationUpsertArticleSuccess | ZodError;

export type MutationUpsertArticleSuccess = {
  data: Article;
};

export type MutationUpsertBarWeekResult = Error | MutationUpsertBarWeekSuccess;

export type MutationUpsertBarWeekSuccess = {
  data: BarWeek;
};

export type MutationUpsertDocumentResult = Error | MutationUpsertDocumentSuccess;

export type MutationUpsertDocumentSuccess = {
  data: Document;
};

export type MutationUpsertEventResult = Error | MutationUpsertEventSuccess;

export type MutationUpsertEventSuccess = {
  data: Event;
};

export type MutationUpsertFormInput = {
  closesAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: Scalars['String']['input'];
  /** Identifiant de l'événement à associer au formulaire */
  eventId?: InputMaybe<Scalars['ID']['input']>;
  /** UID du groupe auquel le formulaire est associé. */
  group?: InputMaybe<Scalars['String']['input']>;
  /** Identifiant du formulaire à mettre à jour. Si non fourni, un nouveau formulaire sera créé. */
  id?: InputMaybe<Scalars['ID']['input']>;
  opensAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  visibility?: Visibility;
};

export type MutationUpsertFormSectionInput = {
  description?: Scalars['String']['input'];
  /** Identifiant du formulaire auquel associer la section. Il n'es pas possible de changer le formulaire auquel une section est associée, si id est fourni, ce paramètre est ignoré. L'ID peut être local */
  formId: Scalars['String']['input'];
  /** Identifiant de la section à mettre à jour. Si non fourni, une nouvelle section sera créée. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Position de la section dans le formulaire. Si non spécifié, la section est ajoutée à la fin du formulaire */
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type MutationUpsertGodparentRequestResult = Error | MutationUpsertGodparentRequestSuccess;

export type MutationUpsertGodparentRequestSuccess = {
  data: GodparentRequest;
};

export type MutationUpsertGroupResult = Error | MutationUpsertGroupSuccess | ZodError;

export type MutationUpsertGroupSuccess = {
  data: Group;
};

export type MutationUpsertPageResult = Error | MutationUpsertPageSuccess | ZodError;

export type MutationUpsertPageSuccess = {
  data: Page;
};

export type MutationUpsertQuestionInput = {
  /** Indique si la question doit avoir une option "Autre" */
  allowOptionOther?: Scalars['Boolean']['input'];
  /** Types de fichiers autorisés pour les questions de type `FileUpload` */
  allowedFiletypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Indique si les réponses à la question sont anonymes */
  anonymous: Scalars['Boolean']['input'];
  /** Valeur par défaut de la question. Voir `AnswerInput.answer` pour le format. */
  default?: Array<Scalars['String']['input']>;
  description?: Scalars['String']['input'];
  /** Identifiant du formulaire auquel associer la question. Il n'es pas possible de changer le formulaire auquel une question est associée, si id est fourni, ce paramètre est ignoré. */
  formId?: InputMaybe<Scalars['ID']['input']>;
  /** Identifiant de la question à mettre à jour. Si non fourni, une nouvelle question sera créée. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['input'];
  options?: InputMaybe<Array<QuestionOptionInput>>;
  /** Position de la question dans la section. Si non spécifié, rajoute la question à la fin de la section. */
  order?: InputMaybe<Scalars['Int']['input']>;
  scale?: InputMaybe<QuestionScaleInput>;
  /** Identifiant de la section de formulaire à laquelle associer la question. Si non fourni, la question est rajoutée à une section à titre vide, qui est créée au besoin. Pratique pour les formulaires plus simples sans section. */
  sectionId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  type: QuestionKind;
};

export type MutationUpsertRegistrationResult = Error | MutationUpsertRegistrationSuccess;

export type MutationUpsertRegistrationSuccess = {
  data: Registration;
};

export type MutationUpsertServiceResult = Error | MutationUpsertServiceSuccess;

export type MutationUpsertServiceSuccess = {
  data: Service;
};

export type MutationUpsertShopItemResult = Error | MutationUpsertShopItemSuccess;

export type MutationUpsertShopItemSuccess = {
  data: ShopItem;
};

export type MutationUpsertShopPaymentResult = Error | MutationUpsertShopPaymentSuccess;

export type MutationUpsertShopPaymentSuccess = {
  data: ShopPayment;
};

export type MutationUsePasswordResetResult = Error | MutationUsePasswordResetSuccess;

export type MutationUsePasswordResetSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationValidateEmailResult = Error | MutationValidateEmailSuccess;

export type MutationValidateEmailSuccess = {
  data: Scalars['Boolean']['output'];
};

export type MutationVerifyBookingResult = Error | MutationVerifyBookingSuccess;

export type MutationVerifyBookingSuccess = {
  data: RegistrationVerificationResult;
};

export type Node = {
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
};

/** An error raised when a resource does not exist. */
export type NotFoundError = ErrorInterface & {
  message: Scalars['String']['output'];
};

/** A notification is a push notification that was sent to a user */
export type Notification = Node & {
  actions: Array<Link>;
  body: Scalars['String']['output'];
  channel: NotificationChannel;
  createdAt: Scalars['DateTime']['output'];
  goto: Scalars['String']['output'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  imageFile: Scalars['String']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  subscription: NotificationSubscription;
  subscriptionId: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vibrate: Array<Scalars['Int']['output']>;
};

export type NotificationChannel =
  | 'Articles'
  | 'Comments'
  | 'GodparentRequests'
  | 'GroupBoard'
  | 'Other'
  | 'Permissions'
  | 'Shotguns';

/** A NotificationSubscription stores a user's subscription to push notifications on a user agent */
export type NotificationSubscription = {
  createdAt: Scalars['DateTime']['output'];
  endpoint: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: User;
  ownerId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NotificationSubscriptionKeysInput = {
  auth: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
};

export type OAuth2Error = {
  code: OAuth2ErrorCode;
  message: Scalars['String']['output'];
};

/** OAuth2 error codes, see RFC 6749 § 4.1.2.1 */
export type OAuth2ErrorCode =
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_scope'
  | 'server_error'
  | 'temporarily_unavailable'
  | 'unauthorized_client'
  | 'unsupported_response_type';

/** Une page écrite par un·e utilisateur·rice, servant par exemple à présenter les partenariats d'une AE sur une page dédiée. */
export type Page = {
  /** Contenu de la page. Supporte la syntaxe Markdown. */
  body: Scalars['String']['output'];
  /** Contenu de la page, converti en HTML. Protégé contre les attaques XSS. */
  bodyHtml: Scalars['String']['output'];
  /** L'utilisateur·ice connecté·e peut modifier ou supprimer cette page */
  canBeEdited: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Chemin vers les fichiers inclus sur la page, par exmple des images. Voir filesURLs pour obtenir les URLs de ces fichiers. */
  files: Array<Scalars['String']['output']>;
  /** URLs vers les fichiers inclus sur la page. */
  filesURLs: Array<Scalars['String']['output']>;
  /** Groupe auquel appartient la page. Peut être null si la page n'appartient à aucun groupe. */
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  /** Dernier·ère utilisateur·rice ayant modifié la page. Peut être null si la page n'a jamais été modifiée, ou que l'utilisateur·ice en question a été supprimé·e. */
  lastAuthor?: Maybe<User>;
  /** Chemin vers la page. Doit être unique _par AE ou groupe_. L'URL finale sera donc préfixée d'une certaine manière pour éviter les collisions. */
  path: Scalars['String']['output'];
  /** Association étudiante à laquelle appartient la page. Peut être null si la page n'appartient à aucune association. */
  studentAssociation?: Maybe<StudentAssociation>;
  /** Titre de la page. */
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PagesConnection = {
  edges: Array<PagesEdge>;
  nodes: Array<Page>;
  pageInfo: PageInfo;
};

export type PagesEdge = {
  cursor: Scalars['String']['output'];
  node: Page;
};

export type PaymentMethod =
  | 'Card'
  | 'Cash'
  | 'Check'
  | 'Lydia'
  | 'Other'
  | 'PayPal'
  | 'Transfer';

export type Picture = {
  id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  position: Scalars['Int']['output'];
};

/** Une ressource qui possède une image associée */
export type Pictured = {
  /** Le nom du fichier de l'image */
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
};


/** Une ressource qui possède une image associée */
export type PicturedpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type ProfitsBreakdown = {
  byPaymentMethod: ProfitsBreakdownByPaymentMethod;
  byTicket: Array<ProfitsBreakdownByTicket>;
  total: Scalars['Float']['output'];
};

export type ProfitsBreakdownByPaymentMethod = {
  Card: Scalars['Float']['output'];
  Cash: Scalars['Float']['output'];
  Check: Scalars['Float']['output'];
  Lydia: Scalars['Float']['output'];
  Other: Scalars['Float']['output'];
  PayPal: Scalars['Float']['output'];
  Transfer: Scalars['Float']['output'];
};

export type ProfitsBreakdownByTicket = {
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
};

export type PromotionType =
  | 'SIMPPS';

export type QRCode = {
  path: Scalars['String']['output'];
  viewbox: Scalars['String']['output'];
};

/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type Query = {
  /** Get all OAuth2 clients. Only admins can do this. */
  allApps: Array<ThirdPartyApp>;
  /** Récupère tous les formulaires. Réservé aux admins. */
  allForms: QueryAllFormsConnection;
  allUsers: QueryAllUsersConnection;
  announcement: Announcement;
  announcements: QueryAnnouncementsConnection;
  announcementsNow: Array<Announcement>;
  article: Article;
  /**
   * Récupérer l'ID d'un article à partir de son groupe et de son slug. Pensé pour les redirections d'URLs anciennes.
   * @deprecated Utilisez `article` à la place
   */
  articleID?: Maybe<Scalars['LocalID']['output']>;
  barWeek: BarWeek;
  barWeekNow?: Maybe<BarWeek>;
  barWeeks: Array<BarWeek>;
  birthdays: Array<User>;
  /** Retourne des informations sur le build actuel de l'API */
  buildInfo: BuildInfo;
  changelog: ChangelogRelease;
  codeContributors: QueryCodeContributorsResult;
  /**
   * A changelog for multiple versions.
   * Be careful, this range is (from, to]. I.e. **the first version is excluded, and the last is included**.
   * This is way more useful for querying a range of versions for a changelog, but not the usual way ranges are defined.
   */
  combinedChangelog: QueryCombinedChangelogResult;
  contributionOptions: Array<ContributionOption>;
  document: Document;
  documents: QueryDocumentsConnection;
  event: Event;
  eventManager: EventManager;
  events: QueryEventsConnection;
  /** Tout les évènements, regroupés par date (de début). Les curseurs (before, after) peuvent être des dates au format YYYY-MM-DD */
  eventsByDay: QueryEventsByDayConnection;
  eventsInWeek: Array<Event>;
  existsInSchoolLdap: Scalars['Boolean']['output'];
  /** Récupère un formulaire. On peut utiliser une subscription pour avoir la mise à jour en temps réel des réponses au formulaire. */
  form?: Maybe<Form>;
  /** Récupère les formulaires visibles par l'utilisateur·ice connecté·e. */
  forms: QueryFormsConnection;
  godparentRequest: GodparentRequest;
  godparentRequests: Array<GodparentRequest>;
  group: Group;
  groupMembersCsv: QueryGroupMembersCsvResult;
  groups: Array<Group>;
  /** - **Rate limit:** 5/seconde */
  healthcheck: HealthCheck;
  /** Gets the homepage articles, customized if the user is logged in. */
  homepage: QueryHomepageConnection;
  issue: Issue;
  issuesByUser: Array<Issue>;
  kioskReload: Scalars['Boolean']['output'];
  logs: QueryLogsConnection;
  lydiaAccount: LydiaAccount;
  lydiaAccounts: Array<LydiaAccount>;
  /** @deprecated Use group.lydiaAccounts instead */
  lydiaAccountsOfGroup: Array<LydiaAccount>;
  major: Major;
  majors: Array<Major>;
  /** - **Rate limit:** 6000/minute */
  me: User;
  minor: Minor;
  minors: QueryMinorsConnection;
  myApps: Array<ThirdPartyApp>;
  notification: Notification;
  notificationSubscription: NotificationSubscription;
  notificationSubscriptions: Array<NotificationSubscription>;
  notifications: QueryNotificationsConnection;
  /** Returns how many people will be notified if an article of the given visibility and group is created. */
  notificationsSendCountForArticle: Scalars['Int']['output'];
  /** Récupérer une page par son identifiant. Voir aussi `Group.page` et `StudentAssociation.page` pour des queries plus ergonomiques */
  page: Page;
  /** Récupère toutes les pages existantes. Réservé aux administrateur·ice.s. */
  pages: QueryPagesConnection;
  quickSignups: QueryQuickSignupsConnection;
  reaction: Reaction;
  reactions: QueryReactionsConnection;
  registration: QueryRegistrationResult;
  /** Returns an SVG path of the QR Code for the given registration */
  registrationQRCode: QRCode;
  /** @deprecated Utilisez plutôt `user(uid: userUid) { bookings }` (champ `bookings` sur le type `User`). */
  registrationsOfUser: QueryRegistrationsOfUserConnection;
  /** Rendu de markdown en HTML. Demande a être authentifié·e pour éviter tout abus. */
  renderMarkdown: Scalars['String']['output'];
  school: School;
  schoolGroups: Array<SchoolGroup>;
  schools: Array<School>;
  searchArticles: Array<ArticleSearchResultType>;
  searchDocuments: Array<DocumentSearchResult>;
  searchEvents: Array<EvenSearchResult>;
  /** Recherche des formulaires */
  searchForms: Array<FormSearchResult>;
  searchGroups: Array<GroupSearchResult>;
  searchUsers: Array<UserSearchResult>;
  service: Service;
  services: Array<Service>;
  shopItem: ShopItem;
  shopPayments: Array<ShopPayment>;
  studentAssociation: StudentAssociation;
  studentAssociations: Array<StudentAssociation>;
  subject: Subject;
  subjects: Array<Subject>;
  thirdPartyApp: ThirdPartyApp;
  ticketGroup: TicketGroup;
  /** Vérifie si un identifiant (un “@” dans l'interface) est disponible */
  uidIsAvailable: Scalars['Boolean']['output'];
  upcomingChangelog: QueryUpcomingChangelogResult;
  user: User;
  userByEmail: User;
  userCandidate: UserCandidate;
  userCandidateByEmail: UserCandidate;
  userCandidates: QueryUserCandidatesConnection;
  userServices: Array<Service>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryallFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryallUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryannouncementArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryannouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryarticleArgs = {
  id: Scalars['LocalID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryarticleIDArgs = {
  group: Scalars['UID']['input'];
  slug: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerybarWeekArgs = {
  slug: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerybarWeekNowArgs = {
  now: Scalars['DateTime']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerybirthdaysArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  now?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerychangelogArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerycombinedChangelogArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  sort?: SortDirection;
  to?: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerydocumentArgs = {
  slug: Scalars['String']['input'];
  subject: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerydocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryeventArgs = {
  group?: InputMaybe<Scalars['UID']['input']>;
  id?: InputMaybe<Scalars['LocalID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryeventManagerArgs = {
  eventId: Scalars['ID']['input'];
  user: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryeventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  future?: InputMaybe<Scalars['Boolean']['input']>;
  kiosk?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  noLinkedArticles?: InputMaybe<Scalars['Boolean']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  pastRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  upcomingShotguns?: InputMaybe<Scalars['Boolean']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryeventsByDayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kiosk?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryeventsInWeekArgs = {
  today: Scalars['DateTime']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryexistsInSchoolLdapArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryformArgs = {
  localId: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryformsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerygodparentRequestArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerygroupArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerygroupMembersCsvArgs = {
  groupUid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerygroupsArgs = {
  types?: InputMaybe<Array<GroupType>>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryhomepageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryissueArgs = {
  number: Scalars['Int']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerylogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerylydiaAccountArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerylydiaAccountsOfGroupArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerymajorArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryminorArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryminorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerynotificationArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerynotificationSubscriptionArgs = {
  endpoint: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerynotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channels?: InputMaybe<Array<NotificationChannel>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupUids?: InputMaybe<Array<Scalars['String']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  subscriptionEndpoint?: InputMaybe<Scalars['ID']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerynotificationsSendCountForArticleArgs = {
  group: Scalars['UID']['input'];
  visibility: Visibility;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerypageArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerypagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryquickSignupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryreactionArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryreactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryregistrationArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryregistrationQRCodeArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryregistrationsOfUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forUserOnly?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userUid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryrenderMarkdownArgs = {
  markdown: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryschoolArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchArticlesArgs = {
  groupUid?: InputMaybe<Scalars['String']['input']>;
  q: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchDocumentsArgs = {
  forApprentices: Scalars['Boolean']['input'];
  majorUid: Scalars['String']['input'];
  q: Scalars['String']['input'];
  yearTier: Scalars['Int']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchEventsArgs = {
  groupUid?: InputMaybe<Scalars['String']['input']>;
  q: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchFormsArgs = {
  q: Scalars['String']['input'];
  similarityCutoff?: InputMaybe<Scalars['Float']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchGroupsArgs = {
  q: Scalars['String']['input'];
  similarityCutoff?: InputMaybe<Scalars['Float']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysearchUsersArgs = {
  q: Scalars['String']['input'];
  similarityCutoff?: InputMaybe<Scalars['Float']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryserviceArgs = {
  id: Scalars['LocalID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryservicesArgs = {
  groupUid?: InputMaybe<Scalars['String']['input']>;
  schoolUid?: InputMaybe<Scalars['String']['input']>;
  studentAssociationUid?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryshopItemArgs = {
  slug: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryshopPaymentsArgs = {
  item: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerystudentAssociationArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerystudentAssociationsArgs = {
  canContributeOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerysubjectArgs = {
  forApprentices: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
  yearTier: Scalars['Int']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerythirdPartyAppArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryticketGroupArgs = {
  id: Scalars['ID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuidIsAvailableArgs = {
  uid: Scalars['UID']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserCandidateArgs = {
  token: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserCandidateByEmailArgs = {
  email: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAllFormsConnection = {
  edges: Array<QueryAllFormsConnectionEdge>;
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export type QueryAllFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Form;
};

export type QueryAllUsersConnection = {
  edges: Array<QueryAllUsersConnectionEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type QueryAllUsersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: User;
};

export type QueryAnnouncementsConnection = {
  edges: Array<QueryAnnouncementsConnectionEdge>;
  nodes: Array<Announcement>;
  pageInfo: PageInfo;
};

export type QueryAnnouncementsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Announcement;
};

export type QueryCodeContributorsResult = Error | QueryCodeContributorsSuccess;

export type QueryCodeContributorsSuccess = {
  data: Array<User>;
};

export type QueryCombinedChangelogResult = Error | QueryCombinedChangelogSuccess;

export type QueryCombinedChangelogSuccess = {
  data: Array<ChangelogRelease>;
};

export type QueryDocumentsConnection = {
  edges: Array<QueryDocumentsConnectionEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

export type QueryDocumentsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Document;
};

export type QueryEventsByDayConnection = {
  edges: Array<QueryEventsByDayConnectionEdge>;
  nodes: Array<EventsByDay>;
  pageInfo: PageInfo;
};

export type QueryEventsByDayConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: EventsByDay;
};

export type QueryEventsConnection = {
  edges: Array<QueryEventsConnectionEdge>;
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type QueryEventsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Event;
};

export type QueryFormsConnection = {
  edges: Array<QueryFormsConnectionEdge>;
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export type QueryFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Form;
};

export type QueryGroupMembersCsvResult = Error | QueryGroupMembersCsvSuccess;

export type QueryGroupMembersCsvSuccess = {
  data: Scalars['String']['output'];
};

export type QueryHomepageConnection = {
  edges: Array<QueryHomepageConnectionEdge>;
  nodes: Array<Article>;
  pageInfo: PageInfo;
};

export type QueryHomepageConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Article;
};

export type QueryLogsConnection = {
  edges: Array<QueryLogsConnectionEdge>;
  nodes: Array<LogEntry>;
  pageInfo: PageInfo;
};

export type QueryLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: LogEntry;
};

export type QueryMinorsConnection = {
  edges: Array<QueryMinorsConnectionEdge>;
  nodes: Array<Minor>;
  pageInfo: PageInfo;
};

export type QueryMinorsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Minor;
};

export type QueryNotificationsConnection = {
  edges: Array<QueryNotificationsConnectionEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type QueryNotificationsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type QueryPagesConnection = {
  edges: Array<QueryPagesConnectionEdge>;
  nodes: Array<Page>;
  pageInfo: PageInfo;
};

export type QueryPagesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Page;
};

export type QueryQuickSignupsConnection = {
  edges: Array<QueryQuickSignupsConnectionEdge>;
  nodes: Array<QuickSignup>;
  pageInfo: PageInfo;
};

export type QueryQuickSignupsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: QuickSignup;
};

export type QueryReactionsConnection = {
  edges: Array<QueryReactionsConnectionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type QueryReactionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Reaction;
};

export type QueryRegistrationResult = Error | QueryRegistrationSuccess;

export type QueryRegistrationSuccess = {
  data: Registration;
};

export type QueryRegistrationsOfUserConnection = {
  edges: Array<QueryRegistrationsOfUserConnectionEdge>;
  nodes: Array<Registration>;
  pageInfo: PageInfo;
};

export type QueryRegistrationsOfUserConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Registration;
};

export type QueryUpcomingChangelogResult = Error | QueryUpcomingChangelogSuccess;

export type QueryUpcomingChangelogSuccess = {
  data: ChangelogRelease;
};

export type QueryUserCandidatesConnection = {
  edges: Array<QueryUserCandidatesConnectionEdge>;
  nodes: Array<UserCandidate>;
  pageInfo: PageInfo;
};

export type QueryUserCandidatesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: UserCandidate;
};

/** Une question dans un formulaire */
export type Question = {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Une question dans un formulaire */
export type QuestionanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type QuestionAnswersConnection = {
  edges: Array<QuestionAnswersConnectionEdge>;
  nodes: Array<Answer>;
  pageInfo: PageInfo;
};

export type QuestionAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Answer;
};

/** Question de type `FileUpload` */
export type QuestionFileUpload = Question & {
  /** Types de fichiers autorisés pour les questions de type `File`. Null si la question n'est pas de type `File`. */
  allowedFileTypes?: Maybe<Array<Scalars['String']['output']>>;
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Question de type `FileUpload` */
export type QuestionFileUploadanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Le type de question */
export type QuestionKind =
  /** La réponse est une date, sans heure associée. */
  | 'Date'
  /** La réponse est un fichier mis en ligne par l'utilisateur·ice. */
  | 'FileUpload'
  /** La réponse est un texte long. */
  | 'LongText'
  /** La réponse est un nombre, potentiellement à virgule. */
  | 'Number'
  /** La réponse est un nombre entier entre deux bornes */
  | 'Scale'
  /** La réponse est une ou plusieurs options parmi une liste. */
  | 'SelectMultiple'
  /** La réponse est une des options parmi une liste. */
  | 'SelectOne'
  /** La réponse est un texte court. */
  | 'Text'
  /** La réponse est un temps  (heures, minute et seconde), sans date associée. */
  | 'Time';

/** Choix pour les questions de type `SelectOne` ou `SelectMultiple` */
export type QuestionOptionInput = {
  /** ID de la question vers laquelle sauter si ce choix est sélectionné */
  jump?: InputMaybe<Scalars['ID']['input']>;
  /** Choix */
  value: Scalars['String']['input'];
};

/** Question de type `Text`, `Number`, `Date`, `Time` ou `LongText` */
export type QuestionScalar = Question & {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Question de type `Text`, `Number`, `Date`, `Time` ou `LongText` */
export type QuestionScalaranswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Question de type `Scale` */
export type QuestionScale = Question & {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<StringToIntMapping>;
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Liste des labels pour les valeurs possibles */
  labels: Array<Scalars['String']['output']>;
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** Valeur maximale */
  maximum: Scalars['Int']['output'];
  /** Label de la valeur maximale */
  maximumLabel: Scalars['String']['output'];
  /** Valeur minimale */
  minimum: Scalars['Int']['output'];
  /** Label de la valeur minimale */
  minimumLabel: Scalars['String']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Liste des valeurs possibles */
  options: Array<Scalars['Int']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Question de type `Scale` */
export type QuestionScaleanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Options supplémentaires pour les questions de type `Scale` */
export type QuestionScaleInput = {
  /** Valeur maximale */
  maximum: Scalars['Int']['input'];
  /** Label de la valeur maximale */
  maximumLabel?: InputMaybe<Scalars['String']['input']>;
  /** Valeur minimale */
  minimum: Scalars['Int']['input'];
  /** Label de la valeur minimale */
  minimumLabel?: InputMaybe<Scalars['String']['input']>;
};

/** Question de type `SelectMultiple` */
export type QuestionSelectMultiple = Question & {
  /** Indique si la question de type `SelectOne` ou `SelectMultiple` permet une option "Autre", que l'utilisateur·ice peut remplir sans contrainte. */
  allowOptionsOther: Scalars['Boolean']['output'];
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<StringToIntMapping>;
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Uniquement pertinent pour les questions de type `SelectOne` ou `SelectMultiple` */
  options: Array<Scalars['String']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Question de type `SelectMultiple` */
export type QuestionSelectMultipleanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Question de type `SelectOne` */
export type QuestionSelectOne = Question & {
  /** Indique si la question de type `SelectOne` ou `SelectMultiple` permet une option "Autre", que l'utilisateur·ice peut remplir sans contrainte. */
  allowOptionsOther: Scalars['Boolean']['output'];
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<StringToIntMapping>;
  answers: QuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<Answer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Dans le même ordre que `options`, contient le groupe si l'option porte exactement le nom du groupe, ou null si aucun groupe ne correspond. Pratique pour les questions où l'on demande à choisir entre plusieurs groupes (comme les votes de listes par ex.) */
  groups: Array<Maybe<Group>>;
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Correspondances entre les réponses à cette question et les sections du formulaire à sauter vers. Dans le même ordre que `options`. Quand un élément est null, la section suivante n'est pas modifiée */
  jumps: Array<Maybe<FormSection>>;
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<Answer>;
  /** Uniquement pertinent pour les questions de type `SelectOne` ou `SelectMultiple` */
  options: Array<Scalars['String']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: FormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: QuestionKind;
};


/** Question de type `SelectOne` */
export type QuestionSelectOneanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Lien d'inscription rapide, qui permet de créer un compte étudiant sans adresse mail étudiante et sans validation manuelle */
export type QuickSignup = Node & {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Vrai si le lien est expiré */
  expired: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  school: School;
  schoolId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  validUntil: Scalars['DateTime']['output'];
};

/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type Reactable = {
  /** L’identifiant de la resource */
  id: Scalars['ID']['output'];
  /** Vrai si l’utilisateur·ice connecté·e a réagi avec cet emoji */
  reacted: Scalars['Boolean']['output'];
  /** Nombre total de réactions avec cet emoji */
  reactions: Scalars['Int']['output'];
};


/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type ReactablereactedArgs = {
  emoji: Scalars['String']['input'];
};


/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type ReactablereactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type Reaction = Node & {
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  document?: Maybe<Document>;
  documentId?: Maybe<Scalars['ID']['output']>;
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RedisHealthCheck = {
  /** Whether the Redis publisher client is ready */
  publish: Scalars['Boolean']['output'];
  /** Whether the Redis subscriber client is ready */
  subscribe: Scalars['Boolean']['output'];
};

/** A reservation is a user's registration for a ticket */
export type Registration = Node & {
  author?: Maybe<User>;
  authorEmail: Scalars['String']['output'];
  authorId?: Maybe<Scalars['ID']['output']>;
  authorIsBeneficiary: Scalars['Boolean']['output'];
  beneficiary: Scalars['String']['output'];
  beneficiaryUser?: Maybe<User>;
  cancelled: Scalars['Boolean']['output'];
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  cancelledBy?: Maybe<User>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  opposed: Scalars['Boolean']['output'];
  opposedAt?: Maybe<Scalars['DateTime']['output']>;
  opposedBy?: Maybe<User>;
  paid: Scalars['Boolean']['output'];
  paymentMethod?: Maybe<PaymentMethod>;
  ticket: Ticket;
  ticketId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  verifiedBy?: Maybe<User>;
};

export type RegistrationSearchResult = {
  highlightedBeneficiary: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  registration: Registration;
  similarity: Scalars['Float']['output'];
};

export type RegistrationVerificationResult = {
  registration?: Maybe<Registration>;
  state: RegistrationVerificationState;
};

export type RegistrationVerificationState =
  | 'AlreadyVerified'
  | 'NotFound'
  | 'NotPaid'
  | 'Ok'
  | 'Opposed'
  | 'OtherEvent';

export type RegistrationsCounts = {
  cancelled: Scalars['Float']['output'];
  paid: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  unpaidLydia: Scalars['Float']['output'];
  verified: Scalars['Float']['output'];
};

/** A change in the changelog */
export type ReleaseChange = {
  /** The authors of the change */
  authors: Array<Scalars['String']['output']>;
  html: Scalars['String']['output'];
  /** Issues linked to the change */
  issues: Array<Scalars['Int']['output']>;
  /** Merge requests linked to the change */
  mergeRequests: Array<Scalars['Int']['output']>;
  /** People who created the issues (gave the idea, reported the bug, etc.) */
  reporters: Array<Scalars['String']['output']>;
  /** The text of the change */
  text: Scalars['String']['output'];
};

/** Changes in the changelog, grouped by category */
export type ReleaseChangesMaps = {
  /** New features */
  added: Array<ReleaseChange>;
  /** What was fixed */
  fixed: Array<ReleaseChange>;
  /** What was improved */
  improved: Array<ReleaseChange>;
  /** Miscalleanous changes */
  other: Array<ReleaseChange>;
  /** Security changes */
  security: Array<ReleaseChange>;
  /** Technical changes */
  technical: Array<ReleaseChange>;
};

export type School = Pictured & {
  address: Scalars['String']['output'];
  aliasMailDomains: Array<Scalars['String']['output']>;
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  majors: Array<Major>;
  name: Scalars['String']['output'];
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  services: Array<Service>;
  slug: Scalars['String']['output'];
  studentAssociations: Array<StudentAssociation>;
  studentMailDomain: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};


export type SchoolpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type SchoolGroup = {
  majors: Array<Major>;
  names: Array<Scalars['String']['output']>;
};

export type SchoolInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/** A service */
export type Service = Node & {
  description: Scalars['String']['output'];
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  importance: Scalars['Int']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  logo: Scalars['String']['output'];
  logoSourceType: LogoSourceType;
  name: Scalars['String']['output'];
  school?: Maybe<School>;
  studentAssociation?: Maybe<StudentAssociation>;
  url: Scalars['String']['output'];
};

export type ShopItem = Node & {
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  group: Group;
  id: Scalars['ID']['output'];
  itemOptions: Array<ShopItemOption>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  lydiaAccount?: Maybe<LydiaAccount>;
  max: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  paymentMethods: Array<PaymentMethod>;
  pictures: Array<Picture>;
  price: Scalars['Float']['output'];
  shopPayments: Array<ShopPayment>;
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  stock: Scalars['Int']['output'];
  stockLeft: Scalars['Int']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
};

export type ShopItemAnswer = {
  id: Scalars['ID']['output'];
  options: Array<Scalars['String']['output']>;
  shopPayment: ShopPayment;
  shopPaymentId: Scalars['String']['output'];
};

export type ShopItemOption = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  otherToggle: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  shopItem: ShopItem;
};

export type ShopItemOptionInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  options: Array<Scalars['String']['input']>;
  otherToggle: Scalars['Boolean']['input'];
  required: Scalars['Boolean']['input'];
};

export type ShopPayment = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  paid: Scalars['Boolean']['output'];
  paymentMethod: PaymentMethod;
  quantity: Scalars['Int']['output'];
  shopItem: ShopItem;
  shopItemAnswer?: Maybe<ShopItemAnswer>;
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type SortDirection =
  | 'Ascending'
  | 'Descending';

/** Associe une clé à une valeur de type nombre entier */
export type StringToIntMapping = {
  /** Clé de la paire */
  key: Scalars['String']['output'];
  /** Valeur de la paire */
  value: Scalars['Int']['output'];
};

/** There is one student association per school */
export type StudentAssociation = Pictured & {
  /** Si l'utilsateur·ice courant·e peut créer des groupes rattachés à cette AE */
  canCreateGroups: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut éditer (créer ou modifier) les pages de l'AE */
  canEditPages: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut lister les pages de l'AE */
  canListPages: Scalars['Boolean']['output'];
  contributionOptions: Array<ContributionOption>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  groups: StudentAssociationGroupsConnection;
  /** Nombre de groupes reliés à cette AE */
  groupsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  links: Array<Link>;
  name: Scalars['String']['output'];
  /** La page associée à l'AE */
  page?: Maybe<Page>;
  /** Les pages associées à l'AE */
  pages: PagesConnection;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  school: School;
  schoolId: Scalars['ID']['output'];
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** There is one student association per school */
export type StudentAssociationcanCreateGroupsArgs = {
  type?: InputMaybe<GroupType>;
};


/** There is one student association per school */
export type StudentAssociationgroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<GroupType>>;
};


/** There is one student association per school */
export type StudentAssociationpageArgs = {
  path: Scalars['String']['input'];
};


/** There is one student association per school */
export type StudentAssociationpagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** There is one student association per school */
export type StudentAssociationpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type StudentAssociationGroupsConnection = {
  edges: Array<StudentAssociationGroupsConnectionEdge>;
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

export type StudentAssociationGroupsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Group;
};

export type Subject = {
  apogeeCode?: Maybe<Scalars['String']['output']>;
  documents: SubjectDocumentsConnection;
  documentsCount: Scalars['Int']['output'];
  emoji: Scalars['String']['output'];
  forApprentices: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  links: Array<Link>;
  majors: Array<Major>;
  minors: Array<Minor>;
  name: Scalars['String']['output'];
  nextExamAt?: Maybe<Scalars['DateTime']['output']>;
  semester?: Maybe<Scalars['Int']['output']>;
  shortName: Scalars['String']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  unit?: Maybe<TeachingUnit>;
  unitId?: Maybe<Scalars['ID']['output']>;
  yearTier?: Maybe<Scalars['Int']['output']>;
};


export type SubjectdocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SubjectDocumentsConnection = {
  edges: Array<SubjectDocumentsConnectionEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

export type SubjectDocumentsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Document;
};

/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type Subscription = {
  announcementsNow: Array<Announcement>;
  article: Article;
  event: Event;
  /** Récupère un formulaire. On peut utiliser une subscription pour avoir la mise à jour en temps réel des réponses au formulaire. */
  form?: Maybe<Form>;
  /** Gets the homepage articles, customized if the user is logged in. */
  homepage: QueryHomepageConnection;
  kioskReload: Scalars['Boolean']['output'];
  registration: SubscriptionRegistrationResult;
  thirdPartyApp: ThirdPartyApp;
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptionarticleArgs = {
  id: Scalars['LocalID']['input'];
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptioneventArgs = {
  group?: InputMaybe<Scalars['UID']['input']>;
  id?: InputMaybe<Scalars['LocalID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptionformArgs = {
  localId: Scalars['String']['input'];
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptionhomepageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptionregistrationArgs = {
  id: Scalars['ID']['input'];
};


/**
 * Permet de faire des requêtes de données temps-réel, via des _websockets_.
 * L'endpoint pour le temps réel est `wss://churros.inpt.fr/graphql`.
 *
 * Pour un client JavaScript, il y a par exemple [GraphQL-WebSocket](https://the-guild.dev/graphql/ws/get-started#use-the-client)
 *
 * - **Rate limit par défault:** 600 / 10 minutes (par utilisateur·ice et par query)
 */
export type SubscriptionthirdPartyAppArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionRegistrationResult = Error | SubscriptionRegistrationSuccess;

export type SubscriptionRegistrationSuccess = {
  data: Registration;
};

export type TeachingUnit = {
  apogeeCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  subjects: Array<Subject>;
};

/** A third-party OAuth2 client */
export type ThirdPartyApp = {
  active: Scalars['Boolean']['output'];
  allowedRedirectUris: Array<Scalars['String']['output']>;
  apiUsage: ThirdPartyAppApiUsageConnection;
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  faviconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Logs de connexion de l'application tierce, utile pour débugger des problèmes. Mise à jour en temps réel disponible via une subscription sur la query `thirdPartyApp`. */
  logs: ThirdPartyAppLogsConnection;
  name: Scalars['String']['output'];
  owner: Group;
  rateLimitHits: ThirdPartyAppRateLimitHitsConnection;
  secretLength: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: ThirdPartyAppUsersConnection;
  usersCount: Scalars['Int']['output'];
  website: Scalars['String']['output'];
};


/** A third-party OAuth2 client */
export type ThirdPartyAppapiUsageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ThirdPartyApplogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ThirdPartyApprateLimitHitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ThirdPartyAppusersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThirdPartyAppApiUsageConnection = {
  edges: Array<ThirdPartyAppApiUsageConnectionEdge>;
  nodes: Array<ApiUsage>;
  pageInfo: PageInfo;
};

export type ThirdPartyAppApiUsageConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ApiUsage;
};

export type ThirdPartyAppLogsConnection = {
  edges: Array<ThirdPartyAppLogsConnectionEdge>;
  nodes: Array<LogEntry>;
  pageInfo: PageInfo;
};

export type ThirdPartyAppLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: LogEntry;
};

export type ThirdPartyAppRateLimitHitsConnection = {
  edges: Array<ThirdPartyAppRateLimitHitsConnectionEdge>;
  nodes: Array<ApiRateLimitHits>;
  pageInfo: PageInfo;
};

export type ThirdPartyAppRateLimitHitsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ApiRateLimitHits;
};

export type ThirdPartyAppRegistrationResponse = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
};

export type ThirdPartyAppUsersConnection = {
  edges: Array<ThirdPartyAppUsersConnectionEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ThirdPartyAppUsersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: User;
};

/** A ticket is a way to register for an event. May include a price and conditions. */
export type Ticket = Node & {
  allowedPaymentMethods: Array<PaymentMethod>;
  autojoinGroups: Array<Group>;
  basePrice: Scalars['Float']['output'];
  capacity: Scalars['Int']['output'];
  closesAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  event: Event;
  eventId: Scalars['ID']['output'];
  /** Full name, including the ticket group's name if any */
  fullName: Scalars['String']['output'];
  godsonLimit: Scalars['Int']['output'];
  group?: Maybe<TicketGroup>;
  id: Scalars['ID']['output'];
  links: Array<Link>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  name: Scalars['String']['output'];
  onlyManagersCanProvide: Scalars['Boolean']['output'];
  openToAlumni?: Maybe<Scalars['Boolean']['output']>;
  openToApprentices?: Maybe<Scalars['Boolean']['output']>;
  openToContributors?: Maybe<Scalars['Boolean']['output']>;
  openToExternal?: Maybe<Scalars['Boolean']['output']>;
  openToGroups: Array<Group>;
  openToMajors: Array<Major>;
  openToPromotions: Array<Scalars['Int']['output']>;
  openToSchools: Array<School>;
  opensAt?: Maybe<Scalars['DateTime']['output']>;
  /** Nombre de places restantes. Null si l'information n'est pas disponible. N'est jamais null quand il n'y a plus de places disponibles (0) */
  placesLeft?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  registrations: Array<Registration>;
  remainingGodsons: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  ticketGroupId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
};

/** A ticket group allows for conditions on multiple tickets, such as an upper limit on the sum of registrations in the sub-tickets */
export type TicketGroup = Node & {
  capacity: Scalars['Int']['output'];
  event: Event;
  eventId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  name: Scalars['String']['output'];
  tickets: Array<Ticket>;
};

export type TicketGroupInput = {
  capacity: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type TicketInput = {
  allowedPaymentMethods: Array<PaymentMethod>;
  autojoinGroups: Array<Scalars['String']['input']>;
  capacity: Scalars['Int']['input'];
  closesAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  godsonLimit: Scalars['Int']['input'];
  groupName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  links: Array<LinkInput>;
  name: Scalars['String']['input'];
  onlyManagersCanProvide: Scalars['Boolean']['input'];
  openToAlumni?: InputMaybe<Scalars['Boolean']['input']>;
  openToApprentices?: InputMaybe<Scalars['Boolean']['input']>;
  openToContributors?: InputMaybe<Scalars['Boolean']['input']>;
  openToExternal?: InputMaybe<Scalars['Boolean']['input']>;
  openToGroups: Array<Scalars['String']['input']>;
  openToMajors: Array<Scalars['String']['input']>;
  openToPromotions: Array<Scalars['Int']['input']>;
  openToSchools: Array<Scalars['String']['input']>;
  opensAt?: InputMaybe<Scalars['DateTime']['input']>;
  price: Scalars['Float']['input'];
};

export type UpsertGroupInput = {
  address: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  links: Array<LinkInput>;
  longDescription: Scalars['String']['input'];
  mailingList?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['UID']['input']>;
  related: Array<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['UID']['input']>;
  selfJoinable: Scalars['Boolean']['input'];
  studentAssociation?: InputMaybe<Scalars['UID']['input']>;
  type: GroupType;
  /** Ne sert qu'à la création du groupe. Il est impossible de modifier un uid existant */
  uid?: InputMaybe<Scalars['UID']['input']>;
  website: Scalars['String']['input'];
};

/** Users are the people who use the app */
export type User = Node & Pictured & {
  address: Scalars['String']['output'];
  admin: Scalars['Boolean']['output'];
  /** Vrai si cette personne est administratrice de l'association étudiante donnée */
  adminOf: Scalars['Boolean']['output'];
  /** @deprecated Use `authorizedApps` instead */
  allowedApps: Array<ThirdPartyApp>;
  /** Formulaires complètement répondus par l'utilisateur */
  answeredForms: UserAnsweredFormsConnection;
  apprentice: Scalars['Boolean']['output'];
  articles: UserArticlesConnection;
  /** Applications tierces autorisées à accéder à ce compte utilisateur */
  authorizedApps: Array<ThirdPartyApp>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  /** Les affiliations de l'utilisateur à des groupes dont iel est au bureau */
  boardMemberships: Array<GroupMember>;
  booking: Registration;
  bookings: UserBookingsConnection;
  /** Vrai si cet utilisateur est un bot (i.e. ne représente pas une personne physique) */
  bot: Scalars['Boolean']['output'];
  canAccessDocuments: Scalars['Boolean']['output'];
  canBeEdited: Scalars['Boolean']['output'];
  /** Groupes sur lesquels l'utilisateur·ice peut créer des posts */
  canCreatePostsOn: Array<Group>;
  /** Vrai si cette personne peut éditer le groupe donné */
  canEditGroup: Scalars['Boolean']['output'];
  /** Vrai si cette personne peut éditer des groupes */
  canEditGroups: Scalars['Boolean']['output'];
  cededImageRightsToTVn7: Scalars['Boolean']['output'];
  contributesTo: Array<StudentAssociation>;
  contributesWith: Array<ContributionOption>;
  createdAt: Scalars['DateTime']['output'];
  credentials: Array<Credential>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailChangeRequests: Array<EmailChange>;
  enabledNotificationChannels: Array<NotificationChannel>;
  external: Scalars['Boolean']['output'];
  familyTree: FamilyTree;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  godchildren: Array<User>;
  godparent?: Maybe<User>;
  graduationYear: Scalars['Int']['output'];
  groups: Array<GroupMember>;
  id: Scalars['ID']['output'];
  incomingGodparentRequests: Array<GodparentRequest>;
  lastName: Scalars['String']['output'];
  latestVersionSeenInChangelog: Scalars['String']['output'];
  links: Array<Link>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  major?: Maybe<Major>;
  majorId?: Maybe<Scalars['ID']['output']>;
  managedEvents: Array<EventManager>;
  minor?: Maybe<Minor>;
  nickname: Scalars['String']['output'];
  otherEmails: Array<Scalars['String']['output']>;
  outgoingGodparentRequests: Array<GodparentRequest>;
  /** Formulaires partiellement répondus par l'utilisateur */
  partiallyAnsweredForms: UserPartiallyAnsweredFormsConnection;
  pendingContributions: Array<ContributionOption>;
  phone: Scalars['String']['output'];
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  schoolUid?: Maybe<Scalars['String']['output']>;
  /** Vrai si cette personne est administratrice d'au moins une association étudiante */
  studentAssociationAdmin: Scalars['Boolean']['output'];
  uid: Scalars['String']['output'];
  yearTier: Scalars['Int']['output'];
};


/** Users are the people who use the app */
export type UseradminOfArgs = {
  studentAssociation: Scalars['String']['input'];
};


/** Users are the people who use the app */
export type UseransweredFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type UserarticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type UserbookingArgs = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  event: Scalars['ID']['input'];
};


/** Users are the people who use the app */
export type UserbookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forUserOnly?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type UsercanEditGroupArgs = {
  uid: Scalars['String']['input'];
};


/** Users are the people who use the app */
export type UserpartiallyAnsweredFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type UserpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type UserAnsweredFormsConnection = {
  edges: Array<UserAnsweredFormsConnectionEdge>;
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export type UserAnsweredFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Form;
};

export type UserArticlesConnection = {
  edges: Array<UserArticlesConnectionEdge>;
  nodes: Array<Article>;
  pageInfo: PageInfo;
};

export type UserArticlesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Article;
};

export type UserBookingsConnection = {
  edges: Array<UserBookingsConnectionEdge>;
  nodes: Array<Registration>;
  pageInfo: PageInfo;
};

export type UserBookingsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Registration;
};

/** UserCandidates are users in the registration process */
export type UserCandidate = Node & {
  address: Scalars['String']['output'];
  apprentice: Scalars['Boolean']['output'];
  birthday?: Maybe<Scalars['DateTime']['output']>;
  cededImageRightsToTVn7: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  /** Vrai si l'email est une adresse email d'étudiant. */
  emailIsSchoolEmail: Scalars['Boolean']['output'];
  emailValidated: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  graduationYear: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['LocalID']['output'];
  major?: Maybe<Major>;
  majorId?: Maybe<Scalars['ID']['output']>;
  /** Vrai si l'utilisateur aura besoin d'une validation manuelle à la fin de l'inscription. Null si la notion n'a pas encore de sens. Si la filière n'a pas encore été renseignée, retourne vrai seulement si l'inscription devra être validée manuellement si une filière (peut importe laquelle) est choisie. Voir `needsManualValidationForMajor` pour être plus précis */
  needsManualValidation?: Maybe<Scalars['Boolean']['output']>;
  /** Vrai si l'utilisateur aura besoin d'une validation manuelle à la fin de l'inscription si iel choisi cette filière. Null si la notion n'a pas encore de sens. */
  needsManualValidationForMajor?: Maybe<Scalars['Boolean']['output']>;
  phone: Scalars['String']['output'];
  schoolEmail?: Maybe<Scalars['String']['output']>;
  schoolServer?: Maybe<Scalars['String']['output']>;
  schoolUid?: Maybe<Scalars['String']['output']>;
  suggestedUid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  /** Vrai si l'utilisateur a été créé via un lien d'inscription rapide. */
  usingQuickSignup: Scalars['Boolean']['output'];
};


/** UserCandidates are users in the registration process */
export type UserCandidateneedsManualValidationForMajorArgs = {
  major: Scalars['String']['input'];
};

export type UserPartiallyAnsweredFormsConnection = {
  edges: Array<UserPartiallyAnsweredFormsConnectionEdge>;
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export type UserPartiallyAnsweredFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: Form;
};

export type UserSearchResult = {
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
  user: User;
};

export type Visibility =
  | 'GroupRestricted'
  | 'Private'
  | 'Public'
  | 'SchoolRestricted'
  | 'Unlisted';

/** A validation error, as a list of field errors. */
export type ZodError = ErrorInterface & {
  fieldErrors: Array<ZodFieldError>;
  message: Scalars['String']['output'];
};

/** A validation issue for a field. */
export type ZodFieldError = {
  message: Scalars['String']['output'];
  path: Array<Scalars['String']['output']>;
};

  export type QuerySdk = {
      /** Get all OAuth2 clients. Only admins can do this. **/
  allApps: InContextSdkMethod<Query['allApps'], {}, MeshContext>,
  /** Récupère tous les formulaires. Réservé aux admins. **/
  allForms: InContextSdkMethod<Query['allForms'], QueryallFormsArgs, MeshContext>,
  /** null **/
  allUsers: InContextSdkMethod<Query['allUsers'], QueryallUsersArgs, MeshContext>,
  /** null **/
  announcement: InContextSdkMethod<Query['announcement'], QueryannouncementArgs, MeshContext>,
  /** null **/
  announcements: InContextSdkMethod<Query['announcements'], QueryannouncementsArgs, MeshContext>,
  /** null **/
  announcementsNow: InContextSdkMethod<Query['announcementsNow'], {}, MeshContext>,
  /** null **/
  article: InContextSdkMethod<Query['article'], QueryarticleArgs, MeshContext>,
  /** Récupérer l'ID d'un article à partir de son groupe et de son slug. Pensé pour les redirections d'URLs anciennes. **/
  articleID: InContextSdkMethod<Query['articleID'], QueryarticleIDArgs, MeshContext>,
  /** null **/
  barWeek: InContextSdkMethod<Query['barWeek'], QuerybarWeekArgs, MeshContext>,
  /** null **/
  barWeekNow: InContextSdkMethod<Query['barWeekNow'], QuerybarWeekNowArgs, MeshContext>,
  /** null **/
  barWeeks: InContextSdkMethod<Query['barWeeks'], {}, MeshContext>,
  /** null **/
  birthdays: InContextSdkMethod<Query['birthdays'], QuerybirthdaysArgs, MeshContext>,
  /** Retourne des informations sur le build actuel de l'API **/
  buildInfo: InContextSdkMethod<Query['buildInfo'], {}, MeshContext>,
  /** null **/
  changelog: InContextSdkMethod<Query['changelog'], QuerychangelogArgs, MeshContext>,
  /** null **/
  codeContributors: InContextSdkMethod<Query['codeContributors'], {}, MeshContext>,
  /** A changelog for multiple versions. 
Be careful, this range is (from, to]. I.e. **the first version is excluded, and the last is included**. 
This is way more useful for querying a range of versions for a changelog, but not the usual way ranges are defined. **/
  combinedChangelog: InContextSdkMethod<Query['combinedChangelog'], QuerycombinedChangelogArgs, MeshContext>,
  /** null **/
  contributionOptions: InContextSdkMethod<Query['contributionOptions'], {}, MeshContext>,
  /** null **/
  document: InContextSdkMethod<Query['document'], QuerydocumentArgs, MeshContext>,
  /** null **/
  documents: InContextSdkMethod<Query['documents'], QuerydocumentsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Query['event'], QueryeventArgs, MeshContext>,
  /** null **/
  eventManager: InContextSdkMethod<Query['eventManager'], QueryeventManagerArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Query['events'], QueryeventsArgs, MeshContext>,
  /** Tout les évènements, regroupés par date (de début). Les curseurs (before, after) peuvent être des dates au format YYYY-MM-DD **/
  eventsByDay: InContextSdkMethod<Query['eventsByDay'], QueryeventsByDayArgs, MeshContext>,
  /** null **/
  eventsInWeek: InContextSdkMethod<Query['eventsInWeek'], QueryeventsInWeekArgs, MeshContext>,
  /** null **/
  existsInSchoolLdap: InContextSdkMethod<Query['existsInSchoolLdap'], QueryexistsInSchoolLdapArgs, MeshContext>,
  /** Récupère un formulaire. On peut utiliser une subscription pour avoir la mise à jour en temps réel des réponses au formulaire. **/
  form: InContextSdkMethod<Query['form'], QueryformArgs, MeshContext>,
  /** Récupère les formulaires visibles par l'utilisateur·ice connecté·e. **/
  forms: InContextSdkMethod<Query['forms'], QueryformsArgs, MeshContext>,
  /** null **/
  godparentRequest: InContextSdkMethod<Query['godparentRequest'], QuerygodparentRequestArgs, MeshContext>,
  /** null **/
  godparentRequests: InContextSdkMethod<Query['godparentRequests'], {}, MeshContext>,
  /** null **/
  group: InContextSdkMethod<Query['group'], QuerygroupArgs, MeshContext>,
  /** null **/
  groupMembersCsv: InContextSdkMethod<Query['groupMembersCsv'], QuerygroupMembersCsvArgs, MeshContext>,
  /** null **/
  groups: InContextSdkMethod<Query['groups'], QuerygroupsArgs, MeshContext>,
  /** - **Rate limit:** 5/seconde **/
  healthcheck: InContextSdkMethod<Query['healthcheck'], {}, MeshContext>,
  /** Gets the homepage articles, customized if the user is logged in. **/
  homepage: InContextSdkMethod<Query['homepage'], QueryhomepageArgs, MeshContext>,
  /** null **/
  issue: InContextSdkMethod<Query['issue'], QueryissueArgs, MeshContext>,
  /** null **/
  issuesByUser: InContextSdkMethod<Query['issuesByUser'], {}, MeshContext>,
  /** null **/
  kioskReload: InContextSdkMethod<Query['kioskReload'], {}, MeshContext>,
  /** null **/
  logs: InContextSdkMethod<Query['logs'], QuerylogsArgs, MeshContext>,
  /** null **/
  lydiaAccount: InContextSdkMethod<Query['lydiaAccount'], QuerylydiaAccountArgs, MeshContext>,
  /** null **/
  lydiaAccounts: InContextSdkMethod<Query['lydiaAccounts'], {}, MeshContext>,
  /** null **/
  lydiaAccountsOfGroup: InContextSdkMethod<Query['lydiaAccountsOfGroup'], QuerylydiaAccountsOfGroupArgs, MeshContext>,
  /** null **/
  major: InContextSdkMethod<Query['major'], QuerymajorArgs, MeshContext>,
  /** null **/
  majors: InContextSdkMethod<Query['majors'], {}, MeshContext>,
  /** - **Rate limit:** 6000/minute **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** null **/
  minor: InContextSdkMethod<Query['minor'], QueryminorArgs, MeshContext>,
  /** null **/
  minors: InContextSdkMethod<Query['minors'], QueryminorsArgs, MeshContext>,
  /** null **/
  myApps: InContextSdkMethod<Query['myApps'], {}, MeshContext>,
  /** null **/
  notification: InContextSdkMethod<Query['notification'], QuerynotificationArgs, MeshContext>,
  /** null **/
  notificationSubscription: InContextSdkMethod<Query['notificationSubscription'], QuerynotificationSubscriptionArgs, MeshContext>,
  /** null **/
  notificationSubscriptions: InContextSdkMethod<Query['notificationSubscriptions'], {}, MeshContext>,
  /** null **/
  notifications: InContextSdkMethod<Query['notifications'], QuerynotificationsArgs, MeshContext>,
  /** Returns how many people will be notified if an article of the given visibility and group is created. **/
  notificationsSendCountForArticle: InContextSdkMethod<Query['notificationsSendCountForArticle'], QuerynotificationsSendCountForArticleArgs, MeshContext>,
  /** Récupérer une page par son identifiant. Voir aussi `Group.page` et `StudentAssociation.page` pour des queries plus ergonomiques **/
  page: InContextSdkMethod<Query['page'], QuerypageArgs, MeshContext>,
  /** Récupère toutes les pages existantes. Réservé aux administrateur·ice.s. **/
  pages: InContextSdkMethod<Query['pages'], QuerypagesArgs, MeshContext>,
  /** null **/
  quickSignups: InContextSdkMethod<Query['quickSignups'], QueryquickSignupsArgs, MeshContext>,
  /** null **/
  reaction: InContextSdkMethod<Query['reaction'], QueryreactionArgs, MeshContext>,
  /** null **/
  reactions: InContextSdkMethod<Query['reactions'], QueryreactionsArgs, MeshContext>,
  /** null **/
  registration: InContextSdkMethod<Query['registration'], QueryregistrationArgs, MeshContext>,
  /** Returns an SVG path of the QR Code for the given registration **/
  registrationQRCode: InContextSdkMethod<Query['registrationQRCode'], QueryregistrationQRCodeArgs, MeshContext>,
  /** null **/
  registrationsOfUser: InContextSdkMethod<Query['registrationsOfUser'], QueryregistrationsOfUserArgs, MeshContext>,
  /** Rendu de markdown en HTML. Demande a être authentifié·e pour éviter tout abus. **/
  renderMarkdown: InContextSdkMethod<Query['renderMarkdown'], QueryrenderMarkdownArgs, MeshContext>,
  /** null **/
  school: InContextSdkMethod<Query['school'], QueryschoolArgs, MeshContext>,
  /** null **/
  schoolGroups: InContextSdkMethod<Query['schoolGroups'], {}, MeshContext>,
  /** null **/
  schools: InContextSdkMethod<Query['schools'], {}, MeshContext>,
  /** null **/
  searchArticles: InContextSdkMethod<Query['searchArticles'], QuerysearchArticlesArgs, MeshContext>,
  /** null **/
  searchDocuments: InContextSdkMethod<Query['searchDocuments'], QuerysearchDocumentsArgs, MeshContext>,
  /** null **/
  searchEvents: InContextSdkMethod<Query['searchEvents'], QuerysearchEventsArgs, MeshContext>,
  /** Recherche des formulaires **/
  searchForms: InContextSdkMethod<Query['searchForms'], QuerysearchFormsArgs, MeshContext>,
  /** null **/
  searchGroups: InContextSdkMethod<Query['searchGroups'], QuerysearchGroupsArgs, MeshContext>,
  /** null **/
  searchUsers: InContextSdkMethod<Query['searchUsers'], QuerysearchUsersArgs, MeshContext>,
  /** null **/
  service: InContextSdkMethod<Query['service'], QueryserviceArgs, MeshContext>,
  /** null **/
  services: InContextSdkMethod<Query['services'], QueryservicesArgs, MeshContext>,
  /** null **/
  shopItem: InContextSdkMethod<Query['shopItem'], QueryshopItemArgs, MeshContext>,
  /** null **/
  shopPayments: InContextSdkMethod<Query['shopPayments'], QueryshopPaymentsArgs, MeshContext>,
  /** null **/
  studentAssociation: InContextSdkMethod<Query['studentAssociation'], QuerystudentAssociationArgs, MeshContext>,
  /** null **/
  studentAssociations: InContextSdkMethod<Query['studentAssociations'], QuerystudentAssociationsArgs, MeshContext>,
  /** null **/
  subject: InContextSdkMethod<Query['subject'], QuerysubjectArgs, MeshContext>,
  /** null **/
  subjects: InContextSdkMethod<Query['subjects'], {}, MeshContext>,
  /** null **/
  thirdPartyApp: InContextSdkMethod<Query['thirdPartyApp'], QuerythirdPartyAppArgs, MeshContext>,
  /** null **/
  ticketGroup: InContextSdkMethod<Query['ticketGroup'], QueryticketGroupArgs, MeshContext>,
  /** Vérifie si un identifiant (un “@” dans l'interface) est disponible **/
  uidIsAvailable: InContextSdkMethod<Query['uidIsAvailable'], QueryuidIsAvailableArgs, MeshContext>,
  /** null **/
  upcomingChangelog: InContextSdkMethod<Query['upcomingChangelog'], {}, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  userByEmail: InContextSdkMethod<Query['userByEmail'], QueryuserByEmailArgs, MeshContext>,
  /** null **/
  userCandidate: InContextSdkMethod<Query['userCandidate'], QueryuserCandidateArgs, MeshContext>,
  /** null **/
  userCandidateByEmail: InContextSdkMethod<Query['userCandidateByEmail'], QueryuserCandidateByEmailArgs, MeshContext>,
  /** null **/
  userCandidates: InContextSdkMethod<Query['userCandidates'], QueryuserCandidatesArgs, MeshContext>,
  /** null **/
  userServices: InContextSdkMethod<Query['userServices'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  acceptRegistration: InContextSdkMethod<Mutation['acceptRegistration'], MutationacceptRegistrationArgs, MeshContext>,
  /** Marks the user as having seen the given version's changelog. **/
  acknowledgeChangelog: InContextSdkMethod<Mutation['acknowledgeChangelog'], MutationacknowledgeChangelogArgs, MeshContext>,
  /** Activate a third-party app. Only admins can do this. **/
  activateApp: InContextSdkMethod<Mutation['activateApp'], MutationactivateAppArgs, MeshContext>,
  /** Ajouter un fichier à une page. Permet notamment d'ajouter des images pour s'en servir dans le contenu de la page. **/
  addFileToPage: InContextSdkMethod<Mutation['addFileToPage'], MutationaddFileToPageArgs, MeshContext>,
  /** null **/
  addGroupMember: InContextSdkMethod<Mutation['addGroupMember'], MutationaddGroupMemberArgs, MeshContext>,
  /** Répondre à une question de type `FileUpload` en uploadant un fichier **/
  answerFileQuestion: InContextSdkMethod<Mutation['answerFileQuestion'], MutationanswerFileQuestionArgs, MeshContext>,
  /** null **/
  answerFormSection: InContextSdkMethod<Mutation['answerFormSection'], MutationanswerFormSectionArgs, MeshContext>,
  /** 
Authorize a third-party client to access the user's data. 
Returns an access code. 

Use the frontend's /authorize endpoint instead of this, as it requires already being logged-in.

Do a `GET` request to `https://churros.inpt.fr/authorize?client_id=<clientId>&redirect_uri=<redirectUri>&response_type=code&state=<state>` with:

- `<clientId>`: The client ID of the app. See registerApp to get this.
- `<redirectUri>`: The URL that you want to redirect the user to. The frontend uses this on /authorize to redirect users to `<redirectUri>?code=<return value of this mutation>`
- `<state>`: A random string generated from personal information used to prevent CSRF attacks.

Use that code to get an access token with /token:

Do a `POST` request to `https://churros.inpt.fr/token` with a `application/x-www-form-urlencoded` body with the following fields:

- `grant_type`: `authorization_code`
- `code`: The code returned by this endpoint
- `client_id`: The client ID of the app
- `client_secret`: The client secret of the app
- `redirect_uri`: The redirect URI used in this request
       **/
  authorize: InContextSdkMethod<Mutation['authorize'], MutationauthorizeArgs, MeshContext>,
  /** null **/
  cancelPendingContribution: InContextSdkMethod<Mutation['cancelPendingContribution'], MutationcancelPendingContributionArgs, MeshContext>,
  /** null **/
  cancelRegistration: InContextSdkMethod<Mutation['cancelRegistration'], MutationcancelRegistrationArgs, MeshContext>,
  /** null **/
  checkIfRegistrationIsPaid: InContextSdkMethod<Mutation['checkIfRegistrationIsPaid'], MutationcheckIfRegistrationIsPaidArgs, MeshContext>,
  /** null **/
  claimPromotionCode: InContextSdkMethod<Mutation['claimPromotionCode'], MutationclaimPromotionCodeArgs, MeshContext>,
  /** null **/
  completeRegistration: InContextSdkMethod<Mutation['completeRegistration'], MutationcompleteRegistrationArgs, MeshContext>,
  /** null **/
  contribute: InContextSdkMethod<Mutation['contribute'], MutationcontributeArgs, MeshContext>,
  /** null **/
  createBot: InContextSdkMethod<Mutation['createBot'], MutationcreateBotArgs, MeshContext>,
  /** null **/
  createGitlabIssue: InContextSdkMethod<Mutation['createGitlabIssue'], MutationcreateGitlabIssueArgs, MeshContext>,
  /** Créer un pass Google Wallet pour une réservation donnée. Renvoie l'URL a utiliser pour ajouter le pass à Google Wallet. **/
  createGoogleWalletPass: InContextSdkMethod<Mutation['createGoogleWalletPass'], MutationcreateGoogleWalletPassArgs, MeshContext>,
  /** Crée une feuille Google Sheets (si elle n'existe pas déjà) qui contiendra les réponses au formulaire (et sera mise à jour automatiquement). Renvoie l'URL de la feuille Google Sheets. **/
  createLinkedGoogleSheet: InContextSdkMethod<Mutation['createLinkedGoogleSheet'], MutationcreateLinkedGoogleSheetArgs, MeshContext>,
  /** Démarre une procédure de réinitialisation de mot de passe pour l'utilisateur associé à l'adresse e-mail ou l'uid fournie. Renvoie `true` même si l'utilisateur n'existe pas. **/
  createPasswordReset: InContextSdkMethod<Mutation['createPasswordReset'], MutationcreatePasswordResetArgs, MeshContext>,
  /** Créer un lien d'inscription rapide **/
  createQuickSignup: InContextSdkMethod<Mutation['createQuickSignup'], MutationcreateQuickSignupArgs, MeshContext>,
  /** Deactivate a third-party app. Only admins can do this. **/
  deactivateApp: InContextSdkMethod<Mutation['deactivateApp'], MutationdeactivateAppArgs, MeshContext>,
  /** null **/
  deleteAnnouncement: InContextSdkMethod<Mutation['deleteAnnouncement'], MutationdeleteAnnouncementArgs, MeshContext>,
  /** null **/
  deleteArticle: InContextSdkMethod<Mutation['deleteArticle'], MutationdeleteArticleArgs, MeshContext>,
  /** null **/
  deleteArticlePicture: InContextSdkMethod<Mutation['deleteArticlePicture'], MutationdeleteArticlePictureArgs, MeshContext>,
  /** null **/
  deleteBarWeek: InContextSdkMethod<Mutation['deleteBarWeek'], MutationdeleteBarWeekArgs, MeshContext>,
  /** null **/
  deleteComment: InContextSdkMethod<Mutation['deleteComment'], MutationdeleteCommentArgs, MeshContext>,
  /** null **/
  deleteDocument: InContextSdkMethod<Mutation['deleteDocument'], MutationdeleteDocumentArgs, MeshContext>,
  /** null **/
  deleteDocumentFile: InContextSdkMethod<Mutation['deleteDocumentFile'], MutationdeleteDocumentFileArgs, MeshContext>,
  /** null **/
  deleteEvent: InContextSdkMethod<Mutation['deleteEvent'], MutationdeleteEventArgs, MeshContext>,
  /** null **/
  deleteEventManager: InContextSdkMethod<Mutation['deleteEventManager'], MutationdeleteEventManagerArgs, MeshContext>,
  /** null **/
  deleteEventPicture: InContextSdkMethod<Mutation['deleteEventPicture'], MutationdeleteEventPictureArgs, MeshContext>,
  /** null **/
  deleteGodchild: InContextSdkMethod<Mutation['deleteGodchild'], MutationdeleteGodchildArgs, MeshContext>,
  /** Deletes a pending godparent request. If accept is true, the request will be accepted (and the godparent of the requester will be changed), otherwise it will be rejected (the godparent of the requester won't be changed) **/
  deleteGodparentRequest: InContextSdkMethod<Mutation['deleteGodparentRequest'], MutationdeleteGodparentRequestArgs, MeshContext>,
  /** null **/
  deleteGroup: InContextSdkMethod<Mutation['deleteGroup'], MutationdeleteGroupArgs, MeshContext>,
  /** null **/
  deleteGroupMember: InContextSdkMethod<Mutation['deleteGroupMember'], MutationdeleteGroupMemberArgs, MeshContext>,
  /** null **/
  deleteGroupPicture: InContextSdkMethod<Mutation['deleteGroupPicture'], MutationdeleteGroupPictureArgs, MeshContext>,
  /** null **/
  deleteItemPicture: InContextSdkMethod<Mutation['deleteItemPicture'], MutationdeleteItemPictureArgs, MeshContext>,
  /** null **/
  deleteNotificationSubscription: InContextSdkMethod<Mutation['deleteNotificationSubscription'], MutationdeleteNotificationSubscriptionArgs, MeshContext>,
  /** Supprime une page existante. On peut renseigner l'identifiant de la page ou son chemin ainsi que son groupe ou AE d'appartenance. **/
  deletePage: InContextSdkMethod<Mutation['deletePage'], MutationdeletePageArgs, MeshContext>,
  /** null **/
  deleteQuickSignup: InContextSdkMethod<Mutation['deleteQuickSignup'], MutationdeleteQuickSignupArgs, MeshContext>,
  /** null **/
  deleteReaction: InContextSdkMethod<Mutation['deleteReaction'], MutationdeleteReactionArgs, MeshContext>,
  /** null **/
  deleteRegistration: InContextSdkMethod<Mutation['deleteRegistration'], MutationdeleteRegistrationArgs, MeshContext>,
  /** null **/
  deleteSchoolPicture: InContextSdkMethod<Mutation['deleteSchoolPicture'], MutationdeleteSchoolPictureArgs, MeshContext>,
  /** null **/
  deleteShopItem: InContextSdkMethod<Mutation['deleteShopItem'], MutationdeleteShopItemArgs, MeshContext>,
  /** null **/
  deleteShopOption: InContextSdkMethod<Mutation['deleteShopOption'], MutationdeleteShopOptionArgs, MeshContext>,
  /** null **/
  deleteTicket: InContextSdkMethod<Mutation['deleteTicket'], MutationdeleteTicketArgs, MeshContext>,
  /** null **/
  deleteTicketGroup: InContextSdkMethod<Mutation['deleteTicketGroup'], MutationdeleteTicketGroupArgs, MeshContext>,
  /** null **/
  deleteToken: InContextSdkMethod<Mutation['deleteToken'], MutationdeleteTokenArgs, MeshContext>,
  /** null **/
  deleteUserPicture: InContextSdkMethod<Mutation['deleteUserPicture'], MutationdeleteUserPictureArgs, MeshContext>,
  /** Update a third-party app's details **/
  editApp: InContextSdkMethod<Mutation['editApp'], MutationeditAppArgs, MeshContext>,
  /** null **/
  finishPaypalRegistrationPayment: InContextSdkMethod<Mutation['finishPaypalRegistrationPayment'], MutationfinishPaypalRegistrationPaymentArgs, MeshContext>,
  /** null **/
  kioskReload: InContextSdkMethod<Mutation['kioskReload'], MutationkioskReloadArgs, MeshContext>,
  /** Logs a user in and returns a session token. **/
  login: InContextSdkMethod<Mutation['login'], MutationloginArgs, MeshContext>,
  /** Logs a user out and invalidates the session token. **/
  logout: InContextSdkMethod<Mutation['logout'], {}, MeshContext>,
  /** Envoie une copie des réponses de l'utilisateur·ice connecté·e à ce formulaire par email. Renvoie l'adresse mail à laquelle les réponses ont été envoyées. **/
  mailFormAnswers: InContextSdkMethod<Mutation['mailFormAnswers'], MutationmailFormAnswersArgs, MeshContext>,
  /** null **/
  mergeDocuments: InContextSdkMethod<Mutation['mergeDocuments'], MutationmergeDocumentsArgs, MeshContext>,
  /** null **/
  opposeRegistration: InContextSdkMethod<Mutation['opposeRegistration'], MutationopposeRegistrationArgs, MeshContext>,
  /** When paying with Paypal, returns the order id for a capture to finish the payment **/
  paidRegistration: InContextSdkMethod<Mutation['paidRegistration'], MutationpaidRegistrationArgs, MeshContext>,
  /** null **/
  paidShopPayment: InContextSdkMethod<Mutation['paidShopPayment'], MutationpaidShopPaymentArgs, MeshContext>,
  /** null **/
  refuseRegistration: InContextSdkMethod<Mutation['refuseRegistration'], MutationrefuseRegistrationArgs, MeshContext>,
  /** Register a third-party OAuth2 client. Returns the client secret. The client secret cannot be retrieved at any other time. Use refreshAppSecret to rotate your client secret. **/
  registerApp: InContextSdkMethod<Mutation['registerApp'], MutationregisterAppArgs, MeshContext>,
  /** Enregistrer un token OAuth2 Google pour l'utilisateur connecté. **/
  registerGoogleCredential: InContextSdkMethod<Mutation['registerGoogleCredential'], MutationregisterGoogleCredentialArgs, MeshContext>,
  /** Supprimer un fichier d'une page. **/
  removeFileFromPage: InContextSdkMethod<Mutation['removeFileFromPage'], MutationremoveFileFromPageArgs, MeshContext>,
  /** null **/
  renameSession: InContextSdkMethod<Mutation['renameSession'], MutationrenameSessionArgs, MeshContext>,
  /** null **/
  requestEmailChange: InContextSdkMethod<Mutation['requestEmailChange'], MutationrequestEmailChangeArgs, MeshContext>,
  /** null **/
  resetPassword: InContextSdkMethod<Mutation['resetPassword'], MutationresetPasswordArgs, MeshContext>,
  /** Révoque l'accès d'une application au compte utilisateur connecté. Renvoie `true` si l'opération a réussi. **/
  revokeAuthorization: InContextSdkMethod<Mutation['revokeAuthorization'], MutationrevokeAuthorizationArgs, MeshContext>,
  /** Rotate a third-party app's secret **/
  rotateAppSecret: InContextSdkMethod<Mutation['rotateAppSecret'], MutationrotateAppSecretArgs, MeshContext>,
  /** null **/
  selfJoinGroup: InContextSdkMethod<Mutation['selfJoinGroup'], MutationselfJoinGroupArgs, MeshContext>,
  /** Envoie une notification à l'utilisateur connecté. Limité à une notification par heure. Si l'utilisateur a désactivé les notifications de type “Autres” pour le groupe responsable du [client OAuth](/oauth) faisant la requête, la notification ne lui sera pas envoyée.

- **Rate limit:** 1/heure **/
  sendNotification: InContextSdkMethod<Mutation['sendNotification'], MutationsendNotificationArgs, MeshContext>,
  /** null **/
  setDocumentFileIsSolution: InContextSdkMethod<Mutation['setDocumentFileIsSolution'], MutationsetDocumentFileIsSolutionArgs, MeshContext>,
  /** Coche ou décoche la case à cocher à côté des réponses à un formulaire pour un·e utilisateur·ice. **/
  setFormAnswersCheckbox: InContextSdkMethod<Mutation['setFormAnswersCheckbox'], MutationsetFormAnswersCheckboxArgs, MeshContext>,
  /** null **/
  startRegistration: InContextSdkMethod<Mutation['startRegistration'], MutationstartRegistrationArgs, MeshContext>,
  /** null **/
  syncUserLdap: InContextSdkMethod<Mutation['syncUserLdap'], MutationsyncUserLdapArgs, MeshContext>,
  /** null **/
  testNotification: InContextSdkMethod<Mutation['testNotification'], MutationtestNotificationArgs, MeshContext>,
  /** null **/
  toggleReaction: InContextSdkMethod<Mutation['toggleReaction'], MutationtoggleReactionArgs, MeshContext>,
  /** null **/
  updateArticlePicture: InContextSdkMethod<Mutation['updateArticlePicture'], MutationupdateArticlePictureArgs, MeshContext>,
  /** null **/
  updateEventPicture: InContextSdkMethod<Mutation['updateEventPicture'], MutationupdateEventPictureArgs, MeshContext>,
  /** null **/
  updateGroupPicture: InContextSdkMethod<Mutation['updateGroupPicture'], MutationupdateGroupPictureArgs, MeshContext>,
  /** null **/
  updateItemPicture: InContextSdkMethod<Mutation['updateItemPicture'], MutationupdateItemPictureArgs, MeshContext>,
  /** null **/
  updateNotificationSettings: InContextSdkMethod<Mutation['updateNotificationSettings'], MutationupdateNotificationSettingsArgs, MeshContext>,
  /** Changer si la salle d'un groupe est fermée ou ouvert **/
  updateRoomOpenState: InContextSdkMethod<Mutation['updateRoomOpenState'], MutationupdateRoomOpenStateArgs, MeshContext>,
  /** null **/
  updateSchool: InContextSdkMethod<Mutation['updateSchool'], MutationupdateSchoolArgs, MeshContext>,
  /** null **/
  updateSchoolPicture: InContextSdkMethod<Mutation['updateSchoolPicture'], MutationupdateSchoolPictureArgs, MeshContext>,
  /** null **/
  updateStudentAssociationPicture: InContextSdkMethod<Mutation['updateStudentAssociationPicture'], MutationupdateStudentAssociationPictureArgs, MeshContext>,
  /** null **/
  updateSubjectsExamDates: InContextSdkMethod<Mutation['updateSubjectsExamDates'], {}, MeshContext>,
  /** null **/
  updateUser: InContextSdkMethod<Mutation['updateUser'], MutationupdateUserArgs, MeshContext>,
  /** null **/
  updateUserCandidate: InContextSdkMethod<Mutation['updateUserCandidate'], MutationupdateUserCandidateArgs, MeshContext>,
  /** null **/
  updateUserPermissions: InContextSdkMethod<Mutation['updateUserPermissions'], MutationupdateUserPermissionsArgs, MeshContext>,
  /** null **/
  updateUserPicture: InContextSdkMethod<Mutation['updateUserPicture'], MutationupdateUserPictureArgs, MeshContext>,
  /** null **/
  uploadDocumentFile: InContextSdkMethod<Mutation['uploadDocumentFile'], MutationuploadDocumentFileArgs, MeshContext>,
  /** null **/
  upsertAnnouncement: InContextSdkMethod<Mutation['upsertAnnouncement'], MutationupsertAnnouncementArgs, MeshContext>,
  /** Crée ou met à jour un post **/
  upsertArticle: InContextSdkMethod<Mutation['upsertArticle'], MutationupsertArticleArgs, MeshContext>,
  /** null **/
  upsertBarWeek: InContextSdkMethod<Mutation['upsertBarWeek'], MutationupsertBarWeekArgs, MeshContext>,
  /** null **/
  upsertComment: InContextSdkMethod<Mutation['upsertComment'], MutationupsertCommentArgs, MeshContext>,
  /** null **/
  upsertDocument: InContextSdkMethod<Mutation['upsertDocument'], MutationupsertDocumentArgs, MeshContext>,
  /** null **/
  upsertEvent: InContextSdkMethod<Mutation['upsertEvent'], MutationupsertEventArgs, MeshContext>,
  /** Crée ou met à jour un formulaire. À la création, une section de formulaire vide sans titre est automatiquement créée. C'est pratique pour les formulaires sans section. **/
  upsertForm: InContextSdkMethod<Mutation['upsertForm'], MutationupsertFormArgs, MeshContext>,
  /** Crée ou met à jour une section de formulaire. **/
  upsertFormSection: InContextSdkMethod<Mutation['upsertFormSection'], MutationupsertFormSectionArgs, MeshContext>,
  /** null **/
  upsertGodparentRequest: InContextSdkMethod<Mutation['upsertGodparentRequest'], MutationupsertGodparentRequestArgs, MeshContext>,
  /** null **/
  upsertGroup: InContextSdkMethod<Mutation['upsertGroup'], MutationupsertGroupArgs, MeshContext>,
  /** null **/
  upsertGroupMember: InContextSdkMethod<Mutation['upsertGroupMember'], MutationupsertGroupMemberArgs, MeshContext>,
  /** null **/
  upsertLydiaAccount: InContextSdkMethod<Mutation['upsertLydiaAccount'], MutationupsertLydiaAccountArgs, MeshContext>,
  /** null **/
  upsertManagersOfEvent: InContextSdkMethod<Mutation['upsertManagersOfEvent'], MutationupsertManagersOfEventArgs, MeshContext>,
  /** null **/
  upsertNotificationSubscription: InContextSdkMethod<Mutation['upsertNotificationSubscription'], MutationupsertNotificationSubscriptionArgs, MeshContext>,
  /** Crée ou met à jour une page. **/
  upsertPage: InContextSdkMethod<Mutation['upsertPage'], MutationupsertPageArgs, MeshContext>,
  /** Crée ou met à jour une question. **/
  upsertQuestion: InContextSdkMethod<Mutation['upsertQuestion'], MutationupsertQuestionArgs, MeshContext>,
  /** null **/
  upsertReaction: InContextSdkMethod<Mutation['upsertReaction'], MutationupsertReactionArgs, MeshContext>,
  /** null **/
  upsertRegistration: InContextSdkMethod<Mutation['upsertRegistration'], MutationupsertRegistrationArgs, MeshContext>,
  /** null **/
  upsertService: InContextSdkMethod<Mutation['upsertService'], MutationupsertServiceArgs, MeshContext>,
  /** null **/
  upsertShopItem: InContextSdkMethod<Mutation['upsertShopItem'], MutationupsertShopItemArgs, MeshContext>,
  /** null **/
  upsertShopOptions: InContextSdkMethod<Mutation['upsertShopOptions'], MutationupsertShopOptionsArgs, MeshContext>,
  /** null **/
  upsertShopPayment: InContextSdkMethod<Mutation['upsertShopPayment'], MutationupsertShopPaymentArgs, MeshContext>,
  /** null **/
  upsertTicketGroup: InContextSdkMethod<Mutation['upsertTicketGroup'], MutationupsertTicketGroupArgs, MeshContext>,
  /** null **/
  usePasswordReset: InContextSdkMethod<Mutation['usePasswordReset'], MutationusePasswordResetArgs, MeshContext>,
  /** null **/
  validateEmail: InContextSdkMethod<Mutation['validateEmail'], MutationvalidateEmailArgs, MeshContext>,
  /** null **/
  verifyBooking: InContextSdkMethod<Mutation['verifyBooking'], MutationverifyBookingArgs, MeshContext>
  };

  export type SubscriptionSdk = {
      /** null **/
  announcementsNow: InContextSdkMethod<Subscription['announcementsNow'], {}, MeshContext>,
  /** null **/
  article: InContextSdkMethod<Subscription['article'], SubscriptionarticleArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Subscription['event'], SubscriptioneventArgs, MeshContext>,
  /** Récupère un formulaire. On peut utiliser une subscription pour avoir la mise à jour en temps réel des réponses au formulaire. **/
  form: InContextSdkMethod<Subscription['form'], SubscriptionformArgs, MeshContext>,
  /** Gets the homepage articles, customized if the user is logged in. **/
  homepage: InContextSdkMethod<Subscription['homepage'], SubscriptionhomepageArgs, MeshContext>,
  /** null **/
  kioskReload: InContextSdkMethod<Subscription['kioskReload'], {}, MeshContext>,
  /** null **/
  registration: InContextSdkMethod<Subscription['registration'], SubscriptionregistrationArgs, MeshContext>,
  /** null **/
  thirdPartyApp: InContextSdkMethod<Subscription['thirdPartyApp'], SubscriptionthirdPartyAppArgs, MeshContext>
  };

  export type Context = {
      ["Churros"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
