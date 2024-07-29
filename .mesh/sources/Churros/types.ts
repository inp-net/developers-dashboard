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
  ChurrosBooleanMap: { input: any; output: any; }
  ChurrosCounts: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  ChurrosFile: { input: any; output: any; }
  ChurrosLocalID: { input: any; output: any; }
  ChurrosUID: { input: any; output: any; }
};

/** Announcement is a way to get a message accross the entire site, such as for maintenance announcements. */
export type ChurrosAnnouncement = ChurrosNode & {
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  by?: Maybe<ChurrosUser>;
  createdAt: Scalars['DateTime']['output'];
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  startsAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
  warning: Scalars['Boolean']['output'];
};

/** Une réponse à un formulaire. Les réponses peuvent être de plusieurs types différents (en fonction de la question). */
export type ChurrosAnswer = {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  question: ChurrosQuestion;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
};

/** Réponse de type `Date` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerDate = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScalar;
  /** Réponse donnée, brute (sous forme de texte) */
  rawValue?: Maybe<Scalars['String']['output']>;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['DateTime']['output']>;
};

/** Réponse de type `FileUpload` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerFileUpload = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionFileUpload;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

export type ChurrosAnswerInput = {
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
export type ChurrosAnswerLongText = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Number` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerNumber = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Réponse de type `Scale` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerScale = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Réponse donnée, entre 0 et 1 */
  normalizedValue?: Maybe<Scalars['Float']['output']>;
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScale;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['Int']['output']>;
};

export type ChurrosAnswerSearchResult = {
  answer: ChurrosAnswer;
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** Réponse de type `SelectMultiple` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerSelectMultiple = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionSelectMultiple;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Array<Scalars['String']['output']>>;
};

/** Réponse de type `SelectOne` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerSelectOne = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionSelectOne;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Text` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerText = ChurrosAnswer & {
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScalar;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['String']['output']>;
};

/** Réponse de type `Time` (voir [`QuestionKind`](#QuestionKind)) */
export type ChurrosAnswerTime = ChurrosAnswer & {
  answer: ChurrosAnswer;
  answerString: Scalars['String']['output'];
  /** Réservation associée à la réponse */
  booking?: Maybe<ChurrosRegistration>;
  checkboxIsMarked?: Maybe<Scalars['Boolean']['output']>;
  /** Date de création de la réponse */
  createdAt: Scalars['DateTime']['output'];
  /** Utilisateur ayant répondu à la question */
  createdBy?: Maybe<ChurrosUser>;
  /** Formulaire auquel appartient la question */
  form: ChurrosForm;
  /** Préfixe de l'identifiant: `answer:` */
  id: Scalars['ID']['output'];
  /** Question à laquelle la réponse est associée */
  question: ChurrosQuestionScalar;
  /** Réponse donnée, brute (sous forme de texte) */
  rawValue?: Maybe<Scalars['String']['output']>;
  /** Section du formulaire auquel appartient la question */
  section: ChurrosFormSection;
  /** Date de dernière mise à jour de la réponse */
  updatedAt: Scalars['DateTime']['output'];
  /** Réponse donnée */
  value?: Maybe<Scalars['DateTime']['output']>;
};

/** Formats d'export des réponses */
export type ChurrosAnswersExportFormats =
  /** Format CSV (séparateur de colonnes: virgule, séparateur de lignes: saut de ligne) */
  | 'CSV'
  /** Format TSV (séparateur de colonnes: tabulation, séparateur de lignes: saut de ligne) */
  | 'TSV';

/** Représente toutes les réponses d'un·e utilisateur·ice à un formulaire. Pratique pour grouper les réponses afin de les afficher dans un tableau */
export type ChurrosAnswersOfUser = {
  answers: Array<ChurrosAnswer>;
  /** Correspond à la date de dernière réponse parmis les réponses */
  date: Scalars['DateTime']['output'];
  user: ChurrosUser;
};

/** Des données temporelles pour construire des graphiques d'atteintes de rate limiting. La résolution temporelle est d'une minute. */
export type ChurrosApiRateLimitHits = {
  /** Le nombre d'erreurs de rate-limiting à cette date */
  count: Scalars['Int']['output'];
  /** La date à laquelle les requêtes ont été faites */
  date: Scalars['DateTime']['output'];
  /** Le nom de la query ou mutation ou subscription */
  queryName: Scalars['String']['output'];
  /** Le type de requête effectuée */
  queryType: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  user?: Maybe<ChurrosUser>;
};

/** Des données temporelles pour construire des graphiques d'utilisation de l'API au cours du temps. La résolution temporelle est d'une minute. */
export type ChurrosApiUsage = {
  /** Le nombre de requêtes faites à cette date */
  count: Scalars['Int']['output'];
  /** La date à laquelle les requêtes ont été faites */
  date: Scalars['DateTime']['output'];
  /** Le nom de la query ou mutation ou subscription */
  queryName: Scalars['String']['output'];
  /** Le type de requête effectuée */
  queryType: ChurrosApiUsageQueryType;
  timestamp: Scalars['Int']['output'];
  user?: Maybe<ChurrosUser>;
};

/** Type de requête effectuée sur l'API */
export type ChurrosApiUsageQueryType =
  /** Modification de données, ou autre action diverses */
  | 'Mutation'
  /** Récupération de données */
  | 'Query'
  /** Abonnement à des données pour être informé en temps réel des changements */
  | 'Subscription';

/** An article is a post in a group */
export type ChurrosArticle = ChurrosCommentable & ChurrosNode & ChurrosPictured & ChurrosReactable & {
  author?: Maybe<ChurrosUser>;
  authorId?: Maybe<Scalars['ID']['output']>;
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  bodyPreview: Scalars['String']['output'];
  /** Vrai si l'utilisateur·ice connecté·e peut éditer le post (en considérant qu'iel ne va pas changer l'auteur·ice ou le groupe du post) */
  canBeEdited: Scalars['Boolean']['output'];
  comments: ChurrosCommentsConnection;
  createdAt: Scalars['DateTime']['output'];
  event?: Maybe<ChurrosEvent>;
  eventId?: Maybe<Scalars['ID']['output']>;
  group: ChurrosGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  links: Array<ChurrosLink>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  myReactions: Scalars['ChurrosBooleanMap']['output'];
  notifiedAt?: Maybe<Scalars['DateTime']['output']>;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  publishedAt: Scalars['DateTime']['output'];
  reacted: Scalars['Boolean']['output'];
  reactionCounts: Scalars['ChurrosCounts']['output'];
  reactions: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  visibility: ChurrosVisibility;
};


/** An article is a post in a group */
export type ChurrosArticlecommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An article is a post in a group */
export type ChurrosArticlepictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** An article is a post in a group */
export type ChurrosArticlereactedArgs = {
  emoji: Scalars['String']['input'];
};


/** An article is a post in a group */
export type ChurrosArticlereactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type ChurrosArticleSearchResultType = {
  article: ChurrosArticle;
  highlightedTitle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

export type ChurrosAwaitingValidationError = {
  message: Scalars['String']['output'];
};

/** A bar week is a week during which some groups takeover the bar staff */
export type ChurrosBarWeek = ChurrosNode & {
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  groups: Array<ChurrosGroup>;
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt: Scalars['DateTime']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
};

export type ChurrosBuildInfo = {
  /** Le hash du commit utilisé pour build l'API */
  commit: Scalars['String']['output'];
  /** La version actuelle de l'API (et de l'application) */
  version: Scalars['String']['output'];
};

/** A release in the changelog */
export type ChurrosChangelogRelease = {
  /** The changes of the release, grouped by category */
  changes: ChurrosReleaseChangesMaps;
  /** The date of the release */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** A short description of the release */
  description: Scalars['String']['output'];
  /** A short description of the release, in HTML. Safe from XSS. */
  descriptionHtml: Scalars['String']['output'];
  /** The version of the release */
  version: Scalars['String']['output'];
};

export type ChurrosComment = ChurrosNode & ChurrosReactable & {
  author?: Maybe<ChurrosUser>;
  authorId?: Maybe<Scalars['ID']['output']>;
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  document?: Maybe<ChurrosDocument>;
  documentId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  inReplyTo?: Maybe<ChurrosComment>;
  inReplyToId?: Maybe<Scalars['ID']['output']>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  reacted: Scalars['Boolean']['output'];
  reactions: Scalars['Int']['output'];
  replies: Array<ChurrosComment>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ChurrosCommentreactedArgs = {
  emoji: Scalars['String']['input'];
};


export type ChurrosCommentreactionsArgs = {
  emoji: Scalars['String']['input'];
};

/** Une resource pouvant être commentée par les utilisateur·ice·s */
export type ChurrosCommentable = {
  comments: ChurrosCommentsConnection;
  /** L’identifiant de la resource commentée */
  id: Scalars['ID']['output'];
};


/** Une resource pouvant être commentée par les utilisateur·ice·s */
export type ChurrosCommentablecommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosCommentsConnection = {
  edges: Array<ChurrosCommentsEdge>;
  nodes: Array<ChurrosComment>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosCommentsEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosComment;
};

export type ChurrosCompleteSignupResult = ChurrosUser | ChurrosUserCandidate;

export type ChurrosContributionOption = {
  descriptionHtml: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  offeredIn: ChurrosSchool;
  paysFor: Array<ChurrosStudentAssociation>;
  price: Scalars['Float']['output'];
};

/** A credential is a way to authenticate a user */
export type ChurrosCredential = {
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
  type: ChurrosCredentialType;
  user: ChurrosUser;
  userAgent: Scalars['String']['output'];
};

export type ChurrosCredentialType =
  | 'Google'
  | 'Password'
  | 'Token';

export type ChurrosDatabaseHealthCheck = {
  prisma: Scalars['Boolean']['output'];
};

export type ChurrosDocument = ChurrosCommentable & ChurrosNode & ChurrosReactable & {
  comments: ChurrosCommentsConnection;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  /** Liste de chemins vers les fichiers représentant le sujet (ou la fiche de révision) */
  paperPaths: Array<Scalars['String']['output']>;
  reacted: Scalars['Boolean']['output'];
  reactions: Scalars['Int']['output'];
  schoolYear: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  /** Liste de chemins vers les fichiers représentant la correction. */
  solutionPaths: Array<Scalars['String']['output']>;
  subject?: Maybe<ChurrosSubject>;
  subjectId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  type: ChurrosDocumentType;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uploader?: Maybe<ChurrosUser>;
  uploaderId?: Maybe<Scalars['ID']['output']>;
};


export type ChurrosDocumentcommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ChurrosDocumentreactedArgs = {
  emoji: Scalars['String']['input'];
};


export type ChurrosDocumentreactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type ChurrosDocumentSearchResult = {
  document: ChurrosDocument;
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  similarity: Scalars['Float']['output'];
};

export type ChurrosDocumentType =
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
export type ChurrosEmailChange = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pending: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: ChurrosUser;
  userId: Scalars['ID']['output'];
};

/** The most basic error object, based on the base JavaScript Error object. */
export type ChurrosError = ChurrosErrorInterface & {
  message: Scalars['String']['output'];
};

/** Basic interface for all error types to implement. */
export type ChurrosErrorInterface = {
  message: Scalars['String']['output'];
};

export type ChurrosEvenSearchResult = {
  event: ChurrosEvent;
  highlightedTitle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEvent = ChurrosNode & ChurrosPictured & ChurrosReactable & {
  articles: Array<ChurrosArticle>;
  author?: Maybe<ChurrosUser>;
  authorId?: Maybe<Scalars['ID']['output']>;
  bannedUsers: Array<ChurrosUser>;
  beneficiary?: Maybe<ChurrosLydiaAccount>;
  bookings: ChurrosEventBookingsConnection;
  bookingsCounts: ChurrosRegistrationsCounts;
  /** Renvoie un texte au format CSV contenant un export des réservations de l'évènement. */
  bookingsCsv: ChurrosEventBookingsCsvResult;
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
  coOrganizers: Array<ChurrosGroup>;
  contactMail: Scalars['String']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionPreview: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  /** Formulaires associés à l'événement */
  forms: Array<ChurrosForm>;
  frequency: ChurrosEventFrequency;
  group: ChurrosGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** Vrai si l'évènement doit apparaître dans le mode kiosque */
  includeInKiosk: Scalars['Boolean']['output'];
  links: Array<ChurrosLink>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  location: Scalars['String']['output'];
  /** Logs concernant cet évènement. Ne contient pas les logs concernant les réservations. */
  logs: ChurrosEventLogsConnection;
  lydiaAccountId?: Maybe<Scalars['ID']['output']>;
  managers: Array<ChurrosEventManager>;
  /** Réservations faites par et/ou pour l'utilisateur.ice connecté.e */
  myBookings: ChurrosEventMyBookingsResult;
  myReactions: Scalars['ChurrosBooleanMap']['output'];
  mySoonestShotgunOpensAt?: Maybe<Scalars['DateTime']['output']>;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  placesLeft?: Maybe<Scalars['Int']['output']>;
  profitsBreakdown: ChurrosProfitsBreakdown;
  reacted: Scalars['Boolean']['output'];
  reactionCounts: Scalars['ChurrosCounts']['output'];
  reactions: Scalars['Int']['output'];
  recurringUntil?: Maybe<Scalars['DateTime']['output']>;
  searchBookings: Array<ChurrosRegistrationSearchResult>;
  /** Vrai si le nombre de places restantes doit être affiché */
  showPlacesLeft: Scalars['Boolean']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt: Scalars['DateTime']['output'];
  ticket?: Maybe<ChurrosTicket>;
  ticketGroups: Array<ChurrosTicketGroup>;
  tickets: Array<ChurrosTicket>;
  title: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  visibility: ChurrosVisibility;
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventbookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventlogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventreactedArgs = {
  emoji: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventreactionsArgs = {
  emoji: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventsearchBookingsArgs = {
  q: Scalars['String']['input'];
};


/** An event is a date, time and place, as well as an optional ticket */
export type ChurrosEventticketArgs = {
  slug: Scalars['String']['input'];
};

export type ChurrosEventBookingsConnection = {
  edges: Array<ChurrosEventBookingsConnectionEdge>;
  nodes: Array<ChurrosRegistration>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosEventBookingsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosRegistration;
};

export type ChurrosEventBookingsCsvResult = ChurrosError | ChurrosEventBookingsCsvSuccess;

export type ChurrosEventBookingsCsvSuccess = {
  data: Scalars['String']['output'];
};

export type ChurrosEventFrequency =
  | 'Biweekly'
  | 'Monthly'
  | 'Once'
  | 'Weekly';

export type ChurrosEventLogsConnection = {
  edges: Array<ChurrosEventLogsConnectionEdge>;
  nodes: Array<ChurrosLogEntry>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosEventLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosLogEntry;
};

/** An event manager is a user that can scan tickets, and may be able to manage the event */
export type ChurrosEventManager = {
  canEdit: Scalars['Boolean']['output'];
  canEditPermissions: Scalars['Boolean']['output'];
  canVerifyRegistrations: Scalars['Boolean']['output'];
  event: ChurrosEvent;
  power: ChurrosEventManagerPowerLevel;
  user: ChurrosUser;
};

export type ChurrosEventManagerPowerLevel =
  | 'Edit'
  | 'EditPermissions'
  | 'ReadOnly'
  | 'ScanTickets';

export type ChurrosEventMyBookingsResult = ChurrosError | ChurrosEventMyBookingsSuccess;

export type ChurrosEventMyBookingsSuccess = {
  data: Array<ChurrosRegistration>;
};

export type ChurrosEventsByDay = {
  date: Scalars['DateTime']['output'];
  /** Évènements qui ont lieu (commencent) à ce jour */
  happening: Array<ChurrosEvent>;
  /** Évènements qui ont leur premier shotgun à ce jour */
  shotgunning: Array<ChurrosEvent>;
};

export type ChurrosFamilyTree = {
  nesting: Scalars['String']['output'];
  users: Array<ChurrosUser>;
};

/** Un formulaire */
export type ChurrosForm = ChurrosNode & {
  /** Nombre de réponses au formulaire */
  answerCount: Scalars['Int']['output'];
  /** Réponses au formulaire */
  answers: ChurrosFormAnswersConnection;
  /** Réponses au formulaire, groupées par utilisateur·ice. Ne contient pas de réponses dont l'utilisateur·ice est inconnu·e. */
  answersByUser: ChurrosFormAnswersByUserConnection;
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
  createdBy?: Maybe<ChurrosUser>;
  /** Description en Markdown du formulaire. */
  description?: Maybe<Scalars['String']['output']>;
  /** Description en HTML du formulaire. */
  descriptionHtml: Scalars['String']['output'];
  /** Événement associé au formulaire */
  event?: Maybe<ChurrosEvent>;
  /** Groupe auquel le formulaire est associé */
  group?: Maybe<ChurrosGroup>;
  /** Vrai si le formulaire comporte des sections */
  hasSections: Scalars['Boolean']['output'];
  /** Préfixe de l'identifiant: `form:` */
  id: Scalars['ID']['output'];
  /** L'URL du Google Sheet des réponses lié à ce formulaire. Voir `createLinkedGoogleSheet` pour créer un Google Sheet lié au formulaire. */
  linkedGoogleSheetUrl?: Maybe<Scalars['String']['output']>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  /** Identifiant local du formulaire */
  localId: Scalars['String']['output'];
  /** Réponses de l'utilisateur·ice connecté·e à ce formulaire */
  myAnswers: Array<ChurrosAnswer>;
  /** Date d'ouverture du formulaire. */
  opensAt?: Maybe<Scalars['DateTime']['output']>;
  /** Questions du formulaire. Liste de toutes les questions, peut importe la section dans laquelle elles se trouvent. */
  questions: ChurrosFormQuestionsConnection;
  searchAnswers: Array<ChurrosAnswerSearchResult>;
  /** Une section du formulaire. */
  section: ChurrosFormSection;
  /** Sections du formulaire. Un formulaire contient toujours au moins une section (sauf s'il n'y a aucune question). Uniquement accessible par celleux qui peuvent modifier le formulaire. Utiliser `nextSection` pour afficher une section dans le but d'y répondre. */
  sections: Array<ChurrosFormSection>;
  title: Scalars['String']['output'];
  /** Date de dernière mise à jour du formulaire */
  updatedAt: Scalars['DateTime']['output'];
  /** Visibilité du formulaire */
  visibility: ChurrosVisibility;
};


/** Un formulaire */
export type ChurrosFormanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Un formulaire */
export type ChurrosFormanswersByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};


/** Un formulaire */
export type ChurrosFormanswersExportArgs = {
  format?: ChurrosAnswersExportFormats;
};


/** Un formulaire */
export type ChurrosFormquestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Un formulaire */
export type ChurrosFormsearchAnswersArgs = {
  q: Scalars['String']['input'];
  similarityCutoff?: InputMaybe<Scalars['Float']['input']>;
};


/** Un formulaire */
export type ChurrosFormsectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ChurrosFormAnswersByUserConnection = {
  edges: Array<ChurrosFormAnswersByUserConnectionEdge>;
  nodes: Array<ChurrosAnswersOfUser>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosFormAnswersByUserConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosAnswersOfUser;
};

export type ChurrosFormAnswersConnection = {
  edges: Array<ChurrosFormAnswersConnectionEdge>;
  nodes: Array<ChurrosAnswer>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosFormAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosAnswer;
};

export type ChurrosFormQuestionsConnection = {
  edges: Array<ChurrosFormQuestionsConnectionEdge>;
  nodes: Array<ChurrosQuestion>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosFormQuestionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosQuestion;
};

export type ChurrosFormSearchResult = {
  form: ChurrosForm;
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

/** Une section d'un formulaire. Les sections sont utiles pour séparer les questions en plusieurs parties, dont certaines peuvent être affichées selon des réponses à des questions précédentes */
export type ChurrosFormSection = {
  /** Réponses à cette section */
  answers: ChurrosFormSectionAnswersConnection;
  /** Description en Markdown de la section */
  description: Scalars['String']['output'];
  /** Description en HTML de la section */
  descriptionHtml: Scalars['String']['output'];
  /** Formulaire auquel appartient la section */
  form: ChurrosForm;
  id: Scalars['ID']['output'];
  /** Identifiant local de la section du formulaire */
  localId: Scalars['String']['output'];
  /** Section suivante dans le formulaire, si il y en a une. (Sinon, c'est que c'est la dernière section). Dépend du fait que des sections soit cachées à l'utilisateur (voir `restrictedToGroups`), ou que une répond à une question provoque le passaage à une autre section (voir `goToSection`)  */
  nextSection?: Maybe<ChurrosFormSection>;
  /** Ordre de la section dans le formulaire */
  order: Scalars['Int']['output'];
  /** Questions dans section */
  questions: Array<ChurrosQuestion>;
  /** Si non vide, seul·e·s les membres des groupes spécifiés peuvent accéder à cette section.  */
  restrictedToGroups: Array<ChurrosGroup>;
  /** Titre de la section */
  title: Scalars['String']['output'];
};


/** Une section d'un formulaire. Les sections sont utiles pour séparer les questions en plusieurs parties, dont certaines peuvent être affichées selon des réponses à des questions précédentes */
export type ChurrosFormSectionanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosFormSectionAnswersConnection = {
  edges: Array<ChurrosFormSectionAnswersConnectionEdge>;
  nodes: Array<ChurrosAnswer>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosFormSectionAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosAnswer;
};

/** Requests to become someone's godchild. Gets deleted once the request has been accepted (or denied). godchild is the requester, godparent is the requested. */
export type ChurrosGodparentRequest = {
  createdAt: Scalars['DateTime']['output'];
  godchild: ChurrosUser;
  godparent: ChurrosUser;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** A group is a collection of users */
export type ChurrosGroup = ChurrosNode & ChurrosPictured & {
  address: Scalars['String']['output'];
  /** All the ancestors of this group, from the current group to the root. */
  ancestors: Array<ChurrosGroup>;
  articles: Array<ChurrosArticle>;
  boardMembers: Array<ChurrosGroupMember>;
  /** Vrai si l'utilisateur·ice connecté·e peut modifier les informations du groupe */
  canEditDetails: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut éditer (créer ou modifier) les pages du groupe */
  canEditPages: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut lister les pages du groupe */
  canListPages: Scalars['Boolean']['output'];
  children: Array<ChurrosGroup>;
  coOrganizedEvents: Array<ChurrosEvent>;
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  events: ChurrosGroupEventsConnection;
  familyChildren: Array<ChurrosGroup>;
  /** Helper field to get a whole tree without processing all groups\nTo be set to the group's id itself for root groups. */
  familyId?: Maybe<Scalars['ID']['output']>;
  /** Formulaires associés au groupe */
  forms: Array<ChurrosForm>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  ldapUid: Scalars['String']['output'];
  links: Array<ChurrosLink>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  longDescription: Scalars['String']['output'];
  longDescriptionHtml: Scalars['String']['output'];
  /** Comptes Lydia du groupe */
  lydiaAccounts: Array<ChurrosLydiaAccount>;
  mailingList: Scalars['String']['output'];
  members: Array<ChurrosGroupMember>;
  name: Scalars['String']['output'];
  ownEvents: Array<ChurrosEvent>;
  /** La page associée au groupe */
  page?: Maybe<ChurrosPage>;
  /** Les pages associées au groupe */
  pages: ChurrosPagesConnection;
  /** Parent group, from which this group inherits its permissions */
  parent?: Maybe<ChurrosGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  pictureFile: Scalars['String']['output'];
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  president?: Maybe<ChurrosGroupMember>;
  /** Related clubs */
  related: Array<ChurrosGroup>;
  roomIsOpen: Scalars['Boolean']['output'];
  /** Family root, only created for performance reasons */
  root?: Maybe<ChurrosGroup>;
  secretaries: Array<ChurrosGroupMember>;
  selfJoinable: Scalars['Boolean']['output'];
  services: Array<ChurrosService>;
  /** Article de la boutique du groupe */
  shopItem?: Maybe<ChurrosShopItem>;
  shopItems: ChurrosGroupShopItemsConnection;
  shopOrders: Array<ChurrosShopPayment>;
  studentAssociation?: Maybe<ChurrosStudentAssociation>;
  treasurers: Array<ChurrosGroupMember>;
  type: ChurrosGroupType;
  uid: Scalars['String']['output'];
  vicePresidents: Array<ChurrosGroupMember>;
  website: Scalars['String']['output'];
};


/** A group is a collection of users */
export type ChurrosGroupeventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A group is a collection of users */
export type ChurrosGrouppageArgs = {
  path: Scalars['String']['input'];
};


/** A group is a collection of users */
export type ChurrosGrouppagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A group is a collection of users */
export type ChurrosGrouppictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};


/** A group is a collection of users */
export type ChurrosGroupshopItemArgs = {
  id: Scalars['ChurrosLocalID']['input'];
};


/** A group is a collection of users */
export type ChurrosGroupshopItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosGroupEventsConnection = {
  edges: Array<ChurrosGroupEventsConnectionEdge>;
  nodes: Array<ChurrosEvent>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosGroupEventsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosEvent;
};

/** The intermediate model between users and groups */
export type ChurrosGroupMember = {
  canEditArticles: Scalars['Boolean']['output'];
  canEditMembers: Scalars['Boolean']['output'];
  canScanEvents: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  group: ChurrosGroup;
  groupId: Scalars['ID']['output'];
  isDeveloper: Scalars['Boolean']['output'];
  member: ChurrosUser;
  memberId: Scalars['ID']['output'];
  president: Scalars['Boolean']['output'];
  secretary: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  treasurer: Scalars['Boolean']['output'];
  vicePresident: Scalars['Boolean']['output'];
};

export type ChurrosGroupSearchResult = {
  group: ChurrosGroup;
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
};

export type ChurrosGroupShopItemsConnection = {
  edges: Array<ChurrosGroupShopItemsConnectionEdge>;
  nodes: Array<ChurrosShopItem>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosGroupShopItemsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosShopItem;
};

export type ChurrosGroupType =
  | 'Association'
  | 'Club'
  | 'Group'
  | 'Integration'
  | 'List'
  | 'StudentAssociationSection';

/** Results of a health self-check */
export type ChurrosHealthCheck = {
  database: ChurrosDatabaseHealthCheck;
  ldap: ChurrosLdapHealthCheck;
  mail: ChurrosMailHealthCheck;
  redis: ChurrosRedisHealthCheck;
};

/** A Gitlab issue */
export type ChurrosIssue = {
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
  comments: Array<ChurrosIssueComment>;
  deployedIn: Scalars['String']['output'];
  /** Expressed from 0 to 1 */
  difficulty?: Maybe<Scalars['Float']['output']>;
  duplicatedFrom?: Maybe<Scalars['Int']['output']>;
  /** Expressed from 0 to 1 */
  importance?: Maybe<Scalars['Float']['output']>;
  number: Scalars['Int']['output'];
  state: ChurrosIssueState;
  /** The date at which the issue was submitted */
  submittedAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** A Gitlab issue comment */
export type ChurrosIssueComment = {
  /** The date at which the comment was added */
  addedAt: Scalars['DateTime']['output'];
  authorAvatarUrl: Scalars['String']['output'];
  authorGitlabUrl: Scalars['String']['output'];
  authorName: Scalars['String']['output'];
  body: Scalars['String']['output'];
  bodyHtml: Scalars['String']['output'];
};

export type ChurrosIssueState =
  | 'Closed'
  | 'Deployed'
  | 'Open';

export type ChurrosLdapHealthCheck = {
  /** Whether the LDAP internal client is ready */
  internal: Scalars['Boolean']['output'];
  /** Whether the LDAP school client is ready */
  school: Scalars['Boolean']['output'];
};

/** A single external link */
export type ChurrosLink = ChurrosNode & {
  computedValue: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ChurrosLinkInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** A log entry is a log of an action that happened on the website */
export type ChurrosLogEntry = ChurrosNode & {
  action: Scalars['String']['output'];
  area: Scalars['String']['output'];
  happenedAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  message: Scalars['String']['output'];
  target?: Maybe<Scalars['String']['output']>;
  user?: Maybe<ChurrosUser>;
};

export type ChurrosLogoSourceType =
  | 'ExternalLink'
  | 'GroupLogo'
  | 'Icon'
  | 'InternalLink';

/** A Lydia account */
export type ChurrosLydiaAccount = {
  events: Array<ChurrosEvent>;
  group?: Maybe<ChurrosGroup>;
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  studentAssociation?: Maybe<ChurrosStudentAssociation>;
  studentAssociationId?: Maybe<Scalars['ID']['output']>;
};

export type ChurrosMailHealthCheck = {
  /** Whether the SMTP client is ready */
  smtp: Scalars['Boolean']['output'];
};

/** A school syllabus */
export type ChurrosMajor = {
  id: Scalars['ID']['output'];
  ldapSchool?: Maybe<ChurrosSchool>;
  minors: Array<ChurrosMinor>;
  name: Scalars['String']['output'];
  schools: Array<ChurrosSchool>;
  shortName: Scalars['String']['output'];
  subjects: Array<ChurrosSubject>;
  uid: Scalars['String']['output'];
};


/** A school syllabus */
export type ChurrosMajorsubjectsArgs = {
  forApprentices?: InputMaybe<Scalars['Boolean']['input']>;
  yearTier?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosManagerOfEventInput = {
  canEdit: Scalars['Boolean']['input'];
  canEditPermissions: Scalars['Boolean']['input'];
  canVerifyRegistrations: Scalars['Boolean']['input'];
  userUid: Scalars['String']['input'];
};

export type ChurrosMinor = ChurrosNode & {
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  majors: Array<ChurrosMajor>;
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  subjects: Array<ChurrosSubject>;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  users: Array<ChurrosUser>;
  yearTier: Scalars['Int']['output'];
};

export type ChurrosMutationAcceptRegistrationResult = ChurrosError | ChurrosMutationAcceptRegistrationSuccess;

export type ChurrosMutationAcceptRegistrationSuccess = {
  data: ChurrosUser;
};

export type ChurrosMutationAddFileToPageResult = ChurrosError | ChurrosMutationAddFileToPageSuccess | ChurrosZodError;

export type ChurrosMutationAddFileToPageSuccess = {
  data: ChurrosPage;
};

export type ChurrosMutationAddGroupMemberResult = ChurrosError | ChurrosMutationAddGroupMemberSuccess;

export type ChurrosMutationAddGroupMemberSuccess = {
  data: ChurrosGroupMember;
};

export type ChurrosMutationAnswerFormSectionResult = ChurrosError | ChurrosMutationAnswerFormSectionSuccess;

export type ChurrosMutationAnswerFormSectionSuccess = {
  data: Array<ChurrosAnswer>;
};

export type ChurrosMutationAuthorizeResult = ChurrosError | ChurrosMutationAuthorizeSuccess | ChurrosOAuth2Error;

export type ChurrosMutationAuthorizeSuccess = {
  data: Scalars['String']['output'];
};

export type ChurrosMutationCancelRegistrationResult = ChurrosError | ChurrosMutationCancelRegistrationSuccess;

export type ChurrosMutationCancelRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationCompleteRegistrationResult = ChurrosError | ChurrosMutationCompleteRegistrationSuccess | ChurrosZodError;

export type ChurrosMutationCompleteRegistrationSuccess = {
  data: ChurrosCompleteSignupResult;
};

export type ChurrosMutationContributeResult = ChurrosError | ChurrosMutationContributeSuccess;

export type ChurrosMutationContributeSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationCreatePasswordResetResult = ChurrosError | ChurrosMutationCreatePasswordResetSuccess;

export type ChurrosMutationCreatePasswordResetSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationDeletePageResult = ChurrosError | ChurrosMutationDeletePageSuccess | ChurrosZodError;

export type ChurrosMutationDeletePageSuccess = {
  data: ChurrosPage;
};

export type ChurrosMutationDeleteShopItemResult = ChurrosError | ChurrosMutationDeleteShopItemSuccess;

export type ChurrosMutationDeleteShopItemSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationFinishPaypalRegistrationPaymentResult = ChurrosError | ChurrosMutationFinishPaypalRegistrationPaymentSuccess;

export type ChurrosMutationFinishPaypalRegistrationPaymentSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationLoginResult = ChurrosAwaitingValidationError | ChurrosError | ChurrosMutationLoginSuccess;

export type ChurrosMutationLoginSuccess = {
  data: ChurrosCredential;
};

export type ChurrosMutationMailFormAnswersResult = ChurrosError | ChurrosMutationMailFormAnswersSuccess;

export type ChurrosMutationMailFormAnswersSuccess = {
  data: Scalars['String']['output'];
};

export type ChurrosMutationOpposeRegistrationResult = ChurrosError | ChurrosMutationOpposeRegistrationSuccess;

export type ChurrosMutationOpposeRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationPaidRegistrationResult = ChurrosError | ChurrosMutationPaidRegistrationSuccess;

export type ChurrosMutationPaidRegistrationSuccess = {
  data: Scalars['String']['output'];
};

export type ChurrosMutationPaidShopPaymentResult = ChurrosError | ChurrosMutationPaidShopPaymentSuccess;

export type ChurrosMutationPaidShopPaymentSuccess = {
  data: ChurrosShopPayment;
};

export type ChurrosMutationRegisterGoogleCredentialResult = ChurrosError | ChurrosMutationRegisterGoogleCredentialSuccess;

export type ChurrosMutationRegisterGoogleCredentialSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationRemoveFileFromPageResult = ChurrosError | ChurrosMutationRemoveFileFromPageSuccess | ChurrosZodError;

export type ChurrosMutationRemoveFileFromPageSuccess = {
  data: ChurrosPage;
};

export type ChurrosMutationRequestEmailChangeResult = ChurrosError | ChurrosMutationRequestEmailChangeSuccess;

export type ChurrosMutationRequestEmailChangeSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationResetPasswordResult = ChurrosError | ChurrosMutationResetPasswordSuccess;

export type ChurrosMutationResetPasswordSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationStartRegistrationResult = ChurrosError | ChurrosMutationStartRegistrationSuccess | ChurrosZodError;

export type ChurrosMutationStartRegistrationSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationUpdateUserCandidateResult = ChurrosError | ChurrosMutationUpdateUserCandidateSuccess | ChurrosZodError;

export type ChurrosMutationUpdateUserCandidateSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationUpdateUserResult = ChurrosError | ChurrosMutationUpdateUserSuccess;

export type ChurrosMutationUpdateUserSuccess = {
  data: ChurrosUser;
};

export type ChurrosMutationUpsertAnnouncementResult = ChurrosError | ChurrosMutationUpsertAnnouncementSuccess | ChurrosZodError;

export type ChurrosMutationUpsertAnnouncementSuccess = {
  data: ChurrosAnnouncement;
};

export type ChurrosMutationUpsertArticleResult = ChurrosError | ChurrosMutationUpsertArticleSuccess | ChurrosZodError;

export type ChurrosMutationUpsertArticleSuccess = {
  data: ChurrosArticle;
};

export type ChurrosMutationUpsertBarWeekResult = ChurrosError | ChurrosMutationUpsertBarWeekSuccess;

export type ChurrosMutationUpsertBarWeekSuccess = {
  data: ChurrosBarWeek;
};

export type ChurrosMutationUpsertDocumentResult = ChurrosError | ChurrosMutationUpsertDocumentSuccess;

export type ChurrosMutationUpsertDocumentSuccess = {
  data: ChurrosDocument;
};

export type ChurrosMutationUpsertEventResult = ChurrosError | ChurrosMutationUpsertEventSuccess;

export type ChurrosMutationUpsertEventSuccess = {
  data: ChurrosEvent;
};

export type ChurrosMutationUpsertFormInput = {
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
  visibility?: ChurrosVisibility;
};

export type ChurrosMutationUpsertFormSectionInput = {
  description?: Scalars['String']['input'];
  /** Identifiant du formulaire auquel associer la section. Il n'es pas possible de changer le formulaire auquel une section est associée, si id est fourni, ce paramètre est ignoré. L'ID peut être local */
  formId: Scalars['String']['input'];
  /** Identifiant de la section à mettre à jour. Si non fourni, une nouvelle section sera créée. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Position de la section dans le formulaire. Si non spécifié, la section est ajoutée à la fin du formulaire */
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type ChurrosMutationUpsertGodparentRequestResult = ChurrosError | ChurrosMutationUpsertGodparentRequestSuccess;

export type ChurrosMutationUpsertGodparentRequestSuccess = {
  data: ChurrosGodparentRequest;
};

export type ChurrosMutationUpsertGroupResult = ChurrosError | ChurrosMutationUpsertGroupSuccess | ChurrosZodError;

export type ChurrosMutationUpsertGroupSuccess = {
  data: ChurrosGroup;
};

export type ChurrosMutationUpsertPageResult = ChurrosError | ChurrosMutationUpsertPageSuccess | ChurrosZodError;

export type ChurrosMutationUpsertPageSuccess = {
  data: ChurrosPage;
};

export type ChurrosMutationUpsertQuestionInput = {
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
  options?: InputMaybe<Array<ChurrosQuestionOptionInput>>;
  /** Position de la question dans la section. Si non spécifié, rajoute la question à la fin de la section. */
  order?: InputMaybe<Scalars['Int']['input']>;
  scale?: InputMaybe<ChurrosQuestionScaleInput>;
  /** Identifiant de la section de formulaire à laquelle associer la question. Si non fourni, la question est rajoutée à une section à titre vide, qui est créée au besoin. Pratique pour les formulaires plus simples sans section. */
  sectionId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  type: ChurrosQuestionKind;
};

export type ChurrosMutationUpsertRegistrationResult = ChurrosError | ChurrosMutationUpsertRegistrationSuccess;

export type ChurrosMutationUpsertRegistrationSuccess = {
  data: ChurrosRegistration;
};

export type ChurrosMutationUpsertServiceResult = ChurrosError | ChurrosMutationUpsertServiceSuccess;

export type ChurrosMutationUpsertServiceSuccess = {
  data: ChurrosService;
};

export type ChurrosMutationUpsertShopItemResult = ChurrosError | ChurrosMutationUpsertShopItemSuccess;

export type ChurrosMutationUpsertShopItemSuccess = {
  data: ChurrosShopItem;
};

export type ChurrosMutationUpsertShopPaymentResult = ChurrosError | ChurrosMutationUpsertShopPaymentSuccess;

export type ChurrosMutationUpsertShopPaymentSuccess = {
  data: ChurrosShopPayment;
};

export type ChurrosMutationUsePasswordResetResult = ChurrosError | ChurrosMutationUsePasswordResetSuccess;

export type ChurrosMutationUsePasswordResetSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationValidateEmailResult = ChurrosError | ChurrosMutationValidateEmailSuccess;

export type ChurrosMutationValidateEmailSuccess = {
  data: Scalars['Boolean']['output'];
};

export type ChurrosMutationVerifyBookingResult = ChurrosError | ChurrosMutationVerifyBookingSuccess;

export type ChurrosMutationVerifyBookingSuccess = {
  data: ChurrosRegistrationVerificationResult;
};

export type ChurrosNode = {
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
};

/** An error raised when a resource does not exist. */
export type ChurrosNotFoundError = ChurrosErrorInterface & {
  message: Scalars['String']['output'];
};

/** A notification is a push notification that was sent to a user */
export type ChurrosNotification = ChurrosNode & {
  actions: Array<ChurrosLink>;
  body: Scalars['String']['output'];
  channel: ChurrosNotificationChannel;
  createdAt: Scalars['DateTime']['output'];
  goto: Scalars['String']['output'];
  group?: Maybe<ChurrosGroup>;
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  imageFile: Scalars['String']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  subscription: ChurrosNotificationSubscription;
  subscriptionId: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vibrate: Array<Scalars['Int']['output']>;
};

export type ChurrosNotificationChannel =
  | 'Articles'
  | 'Comments'
  | 'GodparentRequests'
  | 'GroupBoard'
  | 'Other'
  | 'Permissions'
  | 'Shotguns';

/** A NotificationSubscription stores a user's subscription to push notifications on a user agent */
export type ChurrosNotificationSubscription = {
  createdAt: Scalars['DateTime']['output'];
  endpoint: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: ChurrosUser;
  ownerId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChurrosNotificationSubscriptionKeysInput = {
  auth: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
};

export type ChurrosOAuth2Error = {
  code: ChurrosOAuth2ErrorCode;
  message: Scalars['String']['output'];
};

/** OAuth2 error codes, see RFC 6749 § 4.1.2.1 */
export type ChurrosOAuth2ErrorCode =
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_scope'
  | 'server_error'
  | 'temporarily_unavailable'
  | 'unauthorized_client'
  | 'unsupported_response_type';

/** Une page écrite par un·e utilisateur·rice, servant par exemple à présenter les partenariats d'une AE sur une page dédiée. */
export type ChurrosPage = {
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
  group?: Maybe<ChurrosGroup>;
  id: Scalars['ID']['output'];
  /** Dernier·ère utilisateur·rice ayant modifié la page. Peut être null si la page n'a jamais été modifiée, ou que l'utilisateur·ice en question a été supprimé·e. */
  lastAuthor?: Maybe<ChurrosUser>;
  /** Chemin vers la page. Doit être unique _par AE ou groupe_. L'URL finale sera donc préfixée d'une certaine manière pour éviter les collisions. */
  path: Scalars['String']['output'];
  /** Association étudiante à laquelle appartient la page. Peut être null si la page n'appartient à aucune association. */
  studentAssociation?: Maybe<ChurrosStudentAssociation>;
  /** Titre de la page. */
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChurrosPageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ChurrosPagesConnection = {
  edges: Array<ChurrosPagesEdge>;
  nodes: Array<ChurrosPage>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosPagesEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosPage;
};

export type ChurrosPaymentMethod =
  | 'Card'
  | 'Cash'
  | 'Check'
  | 'Lydia'
  | 'Other'
  | 'PayPal'
  | 'Transfer';

export type ChurrosPicture = {
  id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  position: Scalars['Int']['output'];
};

/** Une ressource qui possède une image associée */
export type ChurrosPictured = {
  /** Le nom du fichier de l'image */
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
};


/** Une ressource qui possède une image associée */
export type ChurrosPicturedpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type ChurrosProfitsBreakdown = {
  byPaymentMethod: ChurrosProfitsBreakdownByPaymentMethod;
  byTicket: Array<ChurrosProfitsBreakdownByTicket>;
  total: Scalars['Float']['output'];
};

export type ChurrosProfitsBreakdownByPaymentMethod = {
  Card: Scalars['Float']['output'];
  Cash: Scalars['Float']['output'];
  Check: Scalars['Float']['output'];
  Lydia: Scalars['Float']['output'];
  Other: Scalars['Float']['output'];
  PayPal: Scalars['Float']['output'];
  Transfer: Scalars['Float']['output'];
};

export type ChurrosProfitsBreakdownByTicket = {
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
};

export type ChurrosPromotionType =
  | 'SIMPPS';

export type ChurrosQRCode = {
  path: Scalars['String']['output'];
  viewbox: Scalars['String']['output'];
};

/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type Query = {
  group: ChurrosGroup;
  /** - **Rate limit:** 6000/minute */
  me: ChurrosUser;
  user: ChurrosUser;
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QuerygroupArgs = {
  uid: Scalars['String']['input'];
};


/** - **Rate limit par défault:** 1200/minute (par utilisateur·ice et par query) */
export type QueryuserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type ChurrosQueryAllFormsConnection = {
  edges: Array<ChurrosQueryAllFormsConnectionEdge>;
  nodes: Array<ChurrosForm>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryAllFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosForm;
};

export type ChurrosQueryAllUsersConnection = {
  edges: Array<ChurrosQueryAllUsersConnectionEdge>;
  nodes: Array<ChurrosUser>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryAllUsersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosUser;
};

export type ChurrosQueryAnnouncementsConnection = {
  edges: Array<ChurrosQueryAnnouncementsConnectionEdge>;
  nodes: Array<ChurrosAnnouncement>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryAnnouncementsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosAnnouncement;
};

export type ChurrosQueryCodeContributorsResult = ChurrosError | ChurrosQueryCodeContributorsSuccess;

export type ChurrosQueryCodeContributorsSuccess = {
  data: Array<ChurrosUser>;
};

export type ChurrosQueryCombinedChangelogResult = ChurrosError | ChurrosQueryCombinedChangelogSuccess;

export type ChurrosQueryCombinedChangelogSuccess = {
  data: Array<ChurrosChangelogRelease>;
};

export type ChurrosQueryDocumentsConnection = {
  edges: Array<ChurrosQueryDocumentsConnectionEdge>;
  nodes: Array<ChurrosDocument>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryDocumentsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosDocument;
};

export type ChurrosQueryEventsByDayConnection = {
  edges: Array<ChurrosQueryEventsByDayConnectionEdge>;
  nodes: Array<ChurrosEventsByDay>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryEventsByDayConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosEventsByDay;
};

export type ChurrosQueryEventsConnection = {
  edges: Array<ChurrosQueryEventsConnectionEdge>;
  nodes: Array<ChurrosEvent>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryEventsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosEvent;
};

export type ChurrosQueryFormsConnection = {
  edges: Array<ChurrosQueryFormsConnectionEdge>;
  nodes: Array<ChurrosForm>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosForm;
};

export type ChurrosQueryGroupMembersCsvResult = ChurrosError | ChurrosQueryGroupMembersCsvSuccess;

export type ChurrosQueryGroupMembersCsvSuccess = {
  data: Scalars['String']['output'];
};

export type ChurrosQueryHomepageConnection = {
  edges: Array<ChurrosQueryHomepageConnectionEdge>;
  nodes: Array<ChurrosArticle>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryHomepageConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosArticle;
};

export type ChurrosQueryLogsConnection = {
  edges: Array<ChurrosQueryLogsConnectionEdge>;
  nodes: Array<ChurrosLogEntry>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosLogEntry;
};

export type ChurrosQueryMinorsConnection = {
  edges: Array<ChurrosQueryMinorsConnectionEdge>;
  nodes: Array<ChurrosMinor>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryMinorsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosMinor;
};

export type ChurrosQueryNotificationsConnection = {
  edges: Array<ChurrosQueryNotificationsConnectionEdge>;
  nodes: Array<ChurrosNotification>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryNotificationsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosNotification;
};

export type ChurrosQueryPagesConnection = {
  edges: Array<ChurrosQueryPagesConnectionEdge>;
  nodes: Array<ChurrosPage>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryPagesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosPage;
};

export type ChurrosQueryQuickSignupsConnection = {
  edges: Array<ChurrosQueryQuickSignupsConnectionEdge>;
  nodes: Array<ChurrosQuickSignup>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryQuickSignupsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosQuickSignup;
};

export type ChurrosQueryReactionsConnection = {
  edges: Array<ChurrosQueryReactionsConnectionEdge>;
  nodes: Array<ChurrosReaction>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryReactionsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosReaction;
};

export type ChurrosQueryRegistrationResult = ChurrosError | ChurrosQueryRegistrationSuccess;

export type ChurrosQueryRegistrationSuccess = {
  data: ChurrosRegistration;
};

export type ChurrosQueryRegistrationsOfUserConnection = {
  edges: Array<ChurrosQueryRegistrationsOfUserConnectionEdge>;
  nodes: Array<ChurrosRegistration>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryRegistrationsOfUserConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosRegistration;
};

export type ChurrosQueryUpcomingChangelogResult = ChurrosError | ChurrosQueryUpcomingChangelogSuccess;

export type ChurrosQueryUpcomingChangelogSuccess = {
  data: ChurrosChangelogRelease;
};

export type ChurrosQueryUserCandidatesConnection = {
  edges: Array<ChurrosQueryUserCandidatesConnectionEdge>;
  nodes: Array<ChurrosUserCandidate>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQueryUserCandidatesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosUserCandidate;
};

/** Une question dans un formulaire */
export type ChurrosQuestion = {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Une question dans un formulaire */
export type ChurrosQuestionanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosQuestionAnswersConnection = {
  edges: Array<ChurrosQuestionAnswersConnectionEdge>;
  nodes: Array<ChurrosAnswer>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosQuestionAnswersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosAnswer;
};

/** Question de type `FileUpload` */
export type ChurrosQuestionFileUpload = ChurrosQuestion & {
  /** Types de fichiers autorisés pour les questions de type `File`. Null si la question n'est pas de type `File`. */
  allowedFileTypes?: Maybe<Array<Scalars['String']['output']>>;
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Question de type `FileUpload` */
export type ChurrosQuestionFileUploadanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Le type de question */
export type ChurrosQuestionKind =
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
export type ChurrosQuestionOptionInput = {
  /** ID de la question vers laquelle sauter si ce choix est sélectionné */
  jump?: InputMaybe<Scalars['ID']['input']>;
  /** Choix */
  value: Scalars['String']['input'];
};

/** Question de type `Text`, `Number`, `Date`, `Time` ou `LongText` */
export type ChurrosQuestionScalar = ChurrosQuestion & {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Question de type `Text`, `Number`, `Date`, `Time` ou `LongText` */
export type ChurrosQuestionScalaranswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Question de type `Scale` */
export type ChurrosQuestionScale = ChurrosQuestion & {
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<ChurrosStringToIntMapping>;
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
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
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Liste des valeurs possibles */
  options: Array<Scalars['Int']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Question de type `Scale` */
export type ChurrosQuestionScaleanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Options supplémentaires pour les questions de type `Scale` */
export type ChurrosQuestionScaleInput = {
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
export type ChurrosQuestionSelectMultiple = ChurrosQuestion & {
  /** Indique si la question de type `SelectOne` ou `SelectMultiple` permet une option "Autre", que l'utilisateur·ice peut remplir sans contrainte. */
  allowOptionsOther: Scalars['Boolean']['output'];
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<ChurrosStringToIntMapping>;
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Uniquement pertinent pour les questions de type `SelectOne` ou `SelectMultiple` */
  options: Array<Scalars['String']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Question de type `SelectMultiple` */
export type ChurrosQuestionSelectMultipleanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Question de type `SelectOne` */
export type ChurrosQuestionSelectOne = ChurrosQuestion & {
  /** Indique si la question de type `SelectOne` ou `SelectMultiple` permet une option "Autre", que l'utilisateur·ice peut remplir sans contrainte. */
  allowOptionsOther: Scalars['Boolean']['output'];
  /** Indique si la réponse à la question est anonyme. Si oui, les personnes pouvant voir les réponses ne pouront jamais savoir la réponse d'une personne à la question */
  anonymous: Scalars['Boolean']['output'];
  /** Compte le nombre total de réponses pour chaque option. Retourne un `StringToIntMapping` où les clés sont les options et les valeurs sont le nombre de réponses pour l'option. */
  answerCounts: Array<ChurrosStringToIntMapping>;
  answers: ChurrosQuestionAnswersConnection;
  /** La réponse par défaut à cette question. Même si le résultat est bien de type Answer, le champ `id` est vide */
  defaultAnswer?: Maybe<ChurrosAnswer>;
  /** Description en Markdown de la question */
  description: Scalars['String']['output'];
  /** Description en HTML de la question */
  descriptionHtml: Scalars['String']['output'];
  /** Dans le même ordre que `options`, contient le groupe si l'option porte exactement le nom du groupe, ou null si aucun groupe ne correspond. Pratique pour les questions où l'on demande à choisir entre plusieurs groupes (comme les votes de listes par ex.) */
  groups: Array<Maybe<ChurrosGroup>>;
  /** Préfixe d'identifiant: question: */
  id: Scalars['ID']['output'];
  /** Correspondances entre les réponses à cette question et les sections du formulaire à sauter vers. Dans le même ordre que `options`. Quand un élément est null, la section suivante n'est pas modifiée */
  jumps: Array<Maybe<ChurrosFormSection>>;
  /** Indique si la question est obligatoire */
  mandatory: Scalars['Boolean']['output'];
  /** La réponse de l'utilisateur·ice connecté·e à cette question */
  myAnswer?: Maybe<ChurrosAnswer>;
  /** Uniquement pertinent pour les questions de type `SelectOne` ou `SelectMultiple` */
  options: Array<Scalars['String']['output']>;
  /** Ordre de la question dans la section */
  order: Scalars['Int']['output'];
  /** Section du formulaire dans laquelle est la question */
  section: ChurrosFormSection;
  /** Titre de la question */
  title: Scalars['String']['output'];
  /** Nombre total de réponses à cette question */
  totalAnswers: Scalars['Int']['output'];
  /** Type de la question */
  type: ChurrosQuestionKind;
};


/** Question de type `SelectOne` */
export type ChurrosQuestionSelectOneanswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  by?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Lien d'inscription rapide, qui permet de créer un compte étudiant sans adresse mail étudiante et sans validation manuelle */
export type ChurrosQuickSignup = ChurrosNode & {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Vrai si le lien est expiré */
  expired: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  school: ChurrosSchool;
  schoolId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  validUntil: Scalars['DateTime']['output'];
};

/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type ChurrosReactable = {
  /** L’identifiant de la resource */
  id: Scalars['ID']['output'];
  /** Vrai si l’utilisateur·ice connecté·e a réagi avec cet emoji */
  reacted: Scalars['Boolean']['output'];
  /** Nombre total de réactions avec cet emoji */
  reactions: Scalars['Int']['output'];
};


/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type ChurrosReactablereactedArgs = {
  emoji: Scalars['String']['input'];
};


/** Une resource pouvant recevoir des réactions (likes, etc) par les utilisateur·ice·s */
export type ChurrosReactablereactionsArgs = {
  emoji: Scalars['String']['input'];
};

export type ChurrosReaction = ChurrosNode & {
  author?: Maybe<ChurrosUser>;
  authorId?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<ChurrosComment>;
  commentId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  document?: Maybe<ChurrosDocument>;
  documentId?: Maybe<Scalars['ID']['output']>;
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChurrosRedisHealthCheck = {
  /** Whether the Redis publisher client is ready */
  publish: Scalars['Boolean']['output'];
  /** Whether the Redis subscriber client is ready */
  subscribe: Scalars['Boolean']['output'];
};

/** A reservation is a user's registration for a ticket */
export type ChurrosRegistration = ChurrosNode & {
  author?: Maybe<ChurrosUser>;
  authorEmail: Scalars['String']['output'];
  authorId?: Maybe<Scalars['ID']['output']>;
  authorIsBeneficiary: Scalars['Boolean']['output'];
  beneficiary: Scalars['String']['output'];
  beneficiaryUser?: Maybe<ChurrosUser>;
  cancelled: Scalars['Boolean']['output'];
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  cancelledBy?: Maybe<ChurrosUser>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  opposed: Scalars['Boolean']['output'];
  opposedAt?: Maybe<Scalars['DateTime']['output']>;
  opposedBy?: Maybe<ChurrosUser>;
  paid: Scalars['Boolean']['output'];
  paymentMethod?: Maybe<ChurrosPaymentMethod>;
  ticket: ChurrosTicket;
  ticketId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  verifiedBy?: Maybe<ChurrosUser>;
};

export type ChurrosRegistrationSearchResult = {
  highlightedBeneficiary: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  registration: ChurrosRegistration;
  similarity: Scalars['Float']['output'];
};

export type ChurrosRegistrationVerificationResult = {
  registration?: Maybe<ChurrosRegistration>;
  state: ChurrosRegistrationVerificationState;
};

export type ChurrosRegistrationVerificationState =
  | 'AlreadyVerified'
  | 'NotFound'
  | 'NotPaid'
  | 'Ok'
  | 'Opposed'
  | 'OtherEvent';

export type ChurrosRegistrationsCounts = {
  cancelled: Scalars['Float']['output'];
  paid: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  unpaidLydia: Scalars['Float']['output'];
  verified: Scalars['Float']['output'];
};

/** A change in the changelog */
export type ChurrosReleaseChange = {
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
export type ChurrosReleaseChangesMaps = {
  /** New features */
  added: Array<ChurrosReleaseChange>;
  /** What was fixed */
  fixed: Array<ChurrosReleaseChange>;
  /** What was improved */
  improved: Array<ChurrosReleaseChange>;
  /** Miscalleanous changes */
  other: Array<ChurrosReleaseChange>;
  /** Security changes */
  security: Array<ChurrosReleaseChange>;
  /** Technical changes */
  technical: Array<ChurrosReleaseChange>;
};

export type ChurrosSchool = ChurrosPictured & {
  address: Scalars['String']['output'];
  aliasMailDomains: Array<Scalars['String']['output']>;
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  majors: Array<ChurrosMajor>;
  name: Scalars['String']['output'];
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  services: Array<ChurrosService>;
  slug: Scalars['String']['output'];
  studentAssociations: Array<ChurrosStudentAssociation>;
  studentMailDomain: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};


export type ChurrosSchoolpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type ChurrosSchoolGroup = {
  majors: Array<ChurrosMajor>;
  names: Array<Scalars['String']['output']>;
};

export type ChurrosSchoolInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/** A service */
export type ChurrosService = ChurrosNode & {
  description: Scalars['String']['output'];
  group?: Maybe<ChurrosGroup>;
  id: Scalars['ID']['output'];
  importance: Scalars['Int']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  logo: Scalars['String']['output'];
  logoSourceType: ChurrosLogoSourceType;
  name: Scalars['String']['output'];
  school?: Maybe<ChurrosSchool>;
  studentAssociation?: Maybe<ChurrosStudentAssociation>;
  url: Scalars['String']['output'];
};

export type ChurrosShopItem = ChurrosNode & {
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  group: ChurrosGroup;
  id: Scalars['ID']['output'];
  itemOptions: Array<ChurrosShopItemOption>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  lydiaAccount?: Maybe<ChurrosLydiaAccount>;
  max: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  paymentMethods: Array<ChurrosPaymentMethod>;
  pictures: Array<ChurrosPicture>;
  price: Scalars['Float']['output'];
  shopPayments: Array<ChurrosShopPayment>;
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  stock: Scalars['Int']['output'];
  stockLeft: Scalars['Int']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: ChurrosVisibility;
};

export type ChurrosShopItemAnswer = {
  id: Scalars['ID']['output'];
  options: Array<Scalars['String']['output']>;
  shopPayment: ChurrosShopPayment;
  shopPaymentId: Scalars['String']['output'];
};

export type ChurrosShopItemOption = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  otherToggle: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  shopItem: ChurrosShopItem;
};

export type ChurrosShopItemOptionInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  options: Array<Scalars['String']['input']>;
  otherToggle: Scalars['Boolean']['input'];
  required: Scalars['Boolean']['input'];
};

export type ChurrosShopPayment = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  paid: Scalars['Boolean']['output'];
  paymentMethod: ChurrosPaymentMethod;
  quantity: Scalars['Int']['output'];
  shopItem: ChurrosShopItem;
  shopItemAnswer?: Maybe<ChurrosShopItemAnswer>;
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: ChurrosUser;
};

export type ChurrosSortDirection =
  | 'Ascending'
  | 'Descending';

/** Associe une clé à une valeur de type nombre entier */
export type ChurrosStringToIntMapping = {
  /** Clé de la paire */
  key: Scalars['String']['output'];
  /** Valeur de la paire */
  value: Scalars['Int']['output'];
};

/** There is one student association per school */
export type ChurrosStudentAssociation = ChurrosPictured & {
  /** Si l'utilsateur·ice courant·e peut créer des groupes rattachés à cette AE */
  canCreateGroups: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut éditer (créer ou modifier) les pages de l'AE */
  canEditPages: Scalars['Boolean']['output'];
  /** L'utilisateur·ice connecté·e peut lister les pages de l'AE */
  canListPages: Scalars['Boolean']['output'];
  contributionOptions: Array<ChurrosContributionOption>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  groups: ChurrosStudentAssociationGroupsConnection;
  /** Nombre de groupes reliés à cette AE */
  groupsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  links: Array<ChurrosLink>;
  name: Scalars['String']['output'];
  /** La page associée à l'AE */
  page?: Maybe<ChurrosPage>;
  /** Les pages associées à l'AE */
  pages: ChurrosPagesConnection;
  pictureFile: Scalars['String']['output'];
  /** Le nom du fichier de l'image, en thème sombre */
  pictureFileDark: Scalars['String']['output'];
  /** L'URL publique de l'image */
  pictureURL: Scalars['String']['output'];
  school: ChurrosSchool;
  schoolId: Scalars['ID']['output'];
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** There is one student association per school */
export type ChurrosStudentAssociationcanCreateGroupsArgs = {
  type?: InputMaybe<ChurrosGroupType>;
};


/** There is one student association per school */
export type ChurrosStudentAssociationgroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<ChurrosGroupType>>;
};


/** There is one student association per school */
export type ChurrosStudentAssociationpageArgs = {
  path: Scalars['String']['input'];
};


/** There is one student association per school */
export type ChurrosStudentAssociationpagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** There is one student association per school */
export type ChurrosStudentAssociationpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type ChurrosStudentAssociationGroupsConnection = {
  edges: Array<ChurrosStudentAssociationGroupsConnectionEdge>;
  nodes: Array<ChurrosGroup>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosStudentAssociationGroupsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosGroup;
};

export type ChurrosSubject = {
  apogeeCode?: Maybe<Scalars['String']['output']>;
  documents: ChurrosSubjectDocumentsConnection;
  documentsCount: Scalars['Int']['output'];
  emoji: Scalars['String']['output'];
  forApprentices: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  links: Array<ChurrosLink>;
  majors: Array<ChurrosMajor>;
  minors: Array<ChurrosMinor>;
  name: Scalars['String']['output'];
  nextExamAt?: Maybe<Scalars['DateTime']['output']>;
  semester?: Maybe<Scalars['Int']['output']>;
  shortName: Scalars['String']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
  unit?: Maybe<ChurrosTeachingUnit>;
  unitId?: Maybe<Scalars['ID']['output']>;
  yearTier?: Maybe<Scalars['Int']['output']>;
};


export type ChurrosSubjectdocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosSubjectDocumentsConnection = {
  edges: Array<ChurrosSubjectDocumentsConnectionEdge>;
  nodes: Array<ChurrosDocument>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosSubjectDocumentsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosDocument;
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
  announcementsNow: Array<ChurrosAnnouncement>;
  article: ChurrosArticle;
  event: ChurrosEvent;
  /** Récupère un formulaire. On peut utiliser une subscription pour avoir la mise à jour en temps réel des réponses au formulaire. */
  form?: Maybe<ChurrosForm>;
  /** Gets the homepage articles, customized if the user is logged in. */
  homepage: ChurrosQueryHomepageConnection;
  kioskReload: Scalars['Boolean']['output'];
  registration: ChurrosSubscriptionRegistrationResult;
  thirdPartyApp: ChurrosThirdPartyApp;
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
  id: Scalars['ChurrosLocalID']['input'];
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
  group?: InputMaybe<Scalars['ChurrosUID']['input']>;
  id?: InputMaybe<Scalars['ChurrosLocalID']['input']>;
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

export type ChurrosSubscriptionRegistrationResult = ChurrosError | ChurrosSubscriptionRegistrationSuccess;

export type ChurrosSubscriptionRegistrationSuccess = {
  data: ChurrosRegistration;
};

export type ChurrosTeachingUnit = {
  apogeeCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  subjects: Array<ChurrosSubject>;
};

/** A third-party OAuth2 client */
export type ChurrosThirdPartyApp = {
  active: Scalars['Boolean']['output'];
  allowedRedirectUris: Array<Scalars['String']['output']>;
  apiUsage: ChurrosThirdPartyAppApiUsageConnection;
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  faviconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Logs de connexion de l'application tierce, utile pour débugger des problèmes. Mise à jour en temps réel disponible via une subscription sur la query `thirdPartyApp`. */
  logs: ChurrosThirdPartyAppLogsConnection;
  name: Scalars['String']['output'];
  owner: ChurrosGroup;
  rateLimitHits: ChurrosThirdPartyAppRateLimitHitsConnection;
  secretLength: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: ChurrosThirdPartyAppUsersConnection;
  usersCount: Scalars['Int']['output'];
  website: Scalars['String']['output'];
};


/** A third-party OAuth2 client */
export type ChurrosThirdPartyAppapiUsageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ChurrosThirdPartyApplogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ChurrosThirdPartyApprateLimitHitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A third-party OAuth2 client */
export type ChurrosThirdPartyAppusersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ChurrosThirdPartyAppApiUsageConnection = {
  edges: Array<ChurrosThirdPartyAppApiUsageConnectionEdge>;
  nodes: Array<ChurrosApiUsage>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosThirdPartyAppApiUsageConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosApiUsage;
};

export type ChurrosThirdPartyAppLogsConnection = {
  edges: Array<ChurrosThirdPartyAppLogsConnectionEdge>;
  nodes: Array<ChurrosLogEntry>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosThirdPartyAppLogsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosLogEntry;
};

export type ChurrosThirdPartyAppRateLimitHitsConnection = {
  edges: Array<ChurrosThirdPartyAppRateLimitHitsConnectionEdge>;
  nodes: Array<ChurrosApiRateLimitHits>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosThirdPartyAppRateLimitHitsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosApiRateLimitHits;
};

export type ChurrosThirdPartyAppRegistrationResponse = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
};

export type ChurrosThirdPartyAppUsersConnection = {
  edges: Array<ChurrosThirdPartyAppUsersConnectionEdge>;
  nodes: Array<ChurrosUser>;
  pageInfo: ChurrosPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ChurrosThirdPartyAppUsersConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosUser;
};

/** A ticket is a way to register for an event. May include a price and conditions. */
export type ChurrosTicket = ChurrosNode & {
  allowedPaymentMethods: Array<ChurrosPaymentMethod>;
  autojoinGroups: Array<ChurrosGroup>;
  basePrice: Scalars['Float']['output'];
  capacity: Scalars['Int']['output'];
  closesAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  event: ChurrosEvent;
  eventId: Scalars['ID']['output'];
  /** Full name, including the ticket group's name if any */
  fullName: Scalars['String']['output'];
  godsonLimit: Scalars['Int']['output'];
  group?: Maybe<ChurrosTicketGroup>;
  id: Scalars['ID']['output'];
  links: Array<ChurrosLink>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  name: Scalars['String']['output'];
  onlyManagersCanProvide: Scalars['Boolean']['output'];
  openToAlumni?: Maybe<Scalars['Boolean']['output']>;
  openToApprentices?: Maybe<Scalars['Boolean']['output']>;
  openToContributors?: Maybe<Scalars['Boolean']['output']>;
  openToExternal?: Maybe<Scalars['Boolean']['output']>;
  openToGroups: Array<ChurrosGroup>;
  openToMajors: Array<ChurrosMajor>;
  openToPromotions: Array<Scalars['Int']['output']>;
  openToSchools: Array<ChurrosSchool>;
  opensAt?: Maybe<Scalars['DateTime']['output']>;
  /** Nombre de places restantes. Null si l'information n'est pas disponible. N'est jamais null quand il n'y a plus de places disponibles (0) */
  placesLeft?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  registrations: Array<ChurrosRegistration>;
  remainingGodsons: Scalars['Int']['output'];
  /** Un nom lisible sans espaces, adaptés pour des URLs. */
  slug: Scalars['String']['output'];
  ticketGroupId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use `slug` instead. This field was never universally unique. */
  uid: Scalars['String']['output'];
};

/** A ticket group allows for conditions on multiple tickets, such as an upper limit on the sum of registrations in the sub-tickets */
export type ChurrosTicketGroup = ChurrosNode & {
  capacity: Scalars['Int']['output'];
  event: ChurrosEvent;
  eventId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  name: Scalars['String']['output'];
  tickets: Array<ChurrosTicket>;
};

export type ChurrosTicketGroupInput = {
  capacity: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type ChurrosTicketInput = {
  allowedPaymentMethods: Array<ChurrosPaymentMethod>;
  autojoinGroups: Array<Scalars['String']['input']>;
  capacity: Scalars['Int']['input'];
  closesAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  godsonLimit: Scalars['Int']['input'];
  groupName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  links: Array<ChurrosLinkInput>;
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

export type ChurrosUpsertGroupInput = {
  address: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  links: Array<ChurrosLinkInput>;
  longDescription: Scalars['String']['input'];
  mailingList?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ChurrosUID']['input']>;
  related: Array<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['ChurrosUID']['input']>;
  selfJoinable: Scalars['Boolean']['input'];
  studentAssociation?: InputMaybe<Scalars['ChurrosUID']['input']>;
  type: ChurrosGroupType;
  /** Ne sert qu'à la création du groupe. Il est impossible de modifier un uid existant */
  uid?: InputMaybe<Scalars['ChurrosUID']['input']>;
  website: Scalars['String']['input'];
};

/** Users are the people who use the app */
export type ChurrosUser = ChurrosNode & ChurrosPictured & {
  address: Scalars['String']['output'];
  admin: Scalars['Boolean']['output'];
  /** Vrai si cette personne est administratrice de l'association étudiante donnée */
  adminOf: Scalars['Boolean']['output'];
  /** @deprecated Use `authorizedApps` instead */
  allowedApps: Array<ChurrosThirdPartyApp>;
  /** Formulaires complètement répondus par l'utilisateur */
  answeredForms: ChurrosUserAnsweredFormsConnection;
  apprentice: Scalars['Boolean']['output'];
  articles: ChurrosUserArticlesConnection;
  /** Applications tierces autorisées à accéder à ce compte utilisateur */
  authorizedApps: Array<ChurrosThirdPartyApp>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  /** Les affiliations de l'utilisateur à des groupes dont iel est au bureau */
  boardMemberships: Array<ChurrosGroupMember>;
  booking: ChurrosRegistration;
  bookings: ChurrosUserBookingsConnection;
  /** Vrai si cet utilisateur est un bot (i.e. ne représente pas une personne physique) */
  bot: Scalars['Boolean']['output'];
  canAccessDocuments: Scalars['Boolean']['output'];
  canBeEdited: Scalars['Boolean']['output'];
  /** Groupes sur lesquels l'utilisateur·ice peut créer des posts */
  canCreatePostsOn: Array<ChurrosGroup>;
  /** Vrai si cette personne peut éditer le groupe donné */
  canEditGroup: Scalars['Boolean']['output'];
  /** Vrai si cette personne peut éditer des groupes */
  canEditGroups: Scalars['Boolean']['output'];
  cededImageRightsToTVn7: Scalars['Boolean']['output'];
  contributesTo: Array<ChurrosStudentAssociation>;
  contributesWith: Array<ChurrosContributionOption>;
  createdAt: Scalars['DateTime']['output'];
  credentials: Array<ChurrosCredential>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailChangeRequests: Array<ChurrosEmailChange>;
  enabledNotificationChannels: Array<ChurrosNotificationChannel>;
  external: Scalars['Boolean']['output'];
  familyTree: ChurrosFamilyTree;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  godchildren: Array<ChurrosUser>;
  godparent?: Maybe<ChurrosUser>;
  graduationYear: Scalars['Int']['output'];
  groups: Array<ChurrosGroupMember>;
  id: Scalars['ID']['output'];
  incomingGodparentRequests: Array<ChurrosGodparentRequest>;
  lastName: Scalars['String']['output'];
  latestVersionSeenInChangelog: Scalars['String']['output'];
  links: Array<ChurrosLink>;
  /** L'identifiant local de la ressource (sans préfixe) */
  localID: Scalars['ChurrosLocalID']['output'];
  major?: Maybe<ChurrosMajor>;
  majorId?: Maybe<Scalars['ID']['output']>;
  managedEvents: Array<ChurrosEventManager>;
  minor?: Maybe<ChurrosMinor>;
  nickname: Scalars['String']['output'];
  otherEmails: Array<Scalars['String']['output']>;
  outgoingGodparentRequests: Array<ChurrosGodparentRequest>;
  /** Formulaires partiellement répondus par l'utilisateur */
  partiallyAnsweredForms: ChurrosUserPartiallyAnsweredFormsConnection;
  pendingContributions: Array<ChurrosContributionOption>;
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
export type ChurrosUseradminOfArgs = {
  studentAssociation: Scalars['String']['input'];
};


/** Users are the people who use the app */
export type ChurrosUseransweredFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type ChurrosUserarticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type ChurrosUserbookingArgs = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  event: Scalars['ID']['input'];
};


/** Users are the people who use the app */
export type ChurrosUserbookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forUserOnly?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type ChurrosUsercanEditGroupArgs = {
  uid: Scalars['String']['input'];
};


/** Users are the people who use the app */
export type ChurrosUserpartiallyAnsweredFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Users are the people who use the app */
export type ChurrosUserpictureURLArgs = {
  dark?: Scalars['Boolean']['input'];
};

export type ChurrosUserAnsweredFormsConnection = {
  edges: Array<ChurrosUserAnsweredFormsConnectionEdge>;
  nodes: Array<ChurrosForm>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosUserAnsweredFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosForm;
};

export type ChurrosUserArticlesConnection = {
  edges: Array<ChurrosUserArticlesConnectionEdge>;
  nodes: Array<ChurrosArticle>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosUserArticlesConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosArticle;
};

export type ChurrosUserBookingsConnection = {
  edges: Array<ChurrosUserBookingsConnectionEdge>;
  nodes: Array<ChurrosRegistration>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosUserBookingsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosRegistration;
};

/** UserCandidates are users in the registration process */
export type ChurrosUserCandidate = ChurrosNode & {
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
  localID: Scalars['ChurrosLocalID']['output'];
  major?: Maybe<ChurrosMajor>;
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
export type ChurrosUserCandidateneedsManualValidationForMajorArgs = {
  major: Scalars['String']['input'];
};

export type ChurrosUserPartiallyAnsweredFormsConnection = {
  edges: Array<ChurrosUserPartiallyAnsweredFormsConnectionEdge>;
  nodes: Array<ChurrosForm>;
  pageInfo: ChurrosPageInfo;
};

export type ChurrosUserPartiallyAnsweredFormsConnectionEdge = {
  cursor: Scalars['String']['output'];
  node: ChurrosForm;
};

export type ChurrosUserSearchResult = {
  highlightedDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rank?: Maybe<Scalars['Float']['output']>;
  similarity: Scalars['Float']['output'];
  user: ChurrosUser;
};

export type ChurrosVisibility =
  | 'GroupRestricted'
  | 'Private'
  | 'Public'
  | 'SchoolRestricted'
  | 'Unlisted';

/** A validation error, as a list of field errors. */
export type ChurrosZodError = ChurrosErrorInterface & {
  fieldErrors: Array<ChurrosZodFieldError>;
  message: Scalars['String']['output'];
};

/** A validation issue for a field. */
export type ChurrosZodFieldError = {
  message: Scalars['String']['output'];
  path: Array<Scalars['String']['output']>;
};

  export type QuerySdk = {
      /** null **/
  group: InContextSdkMethod<Query['group'], QuerygroupArgs, MeshContext>,
  /** - **Rate limit:** 6000/minute **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>
  };

  export type MutationSdk = {
    
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
