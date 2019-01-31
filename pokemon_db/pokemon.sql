--
-- PostgreSQL database dump
--

-- Dumped from database version 11.0
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.pokemon (
    id integer,
    name character varying,
    type character varying,
    evolvesfromid integer
);


ALTER TABLE public.pokemon OWNER TO ashleysouvannaraj;

--
-- Name: trainers; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.trainers (
    id integer,
    name character varying,
    isgymleader boolean,
    pokemonslot1 integer,
    pokemonslot2 integer,
    pokemonslot3 integer,
    pokemonslot4 integer,
    pokemonslot5 integer,
    pokemonslot6 integer
);


ALTER TABLE public.trainers OWNER TO ashleysouvannaraj;

--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.pokemon (id, name, type, evolvesfromid) FROM stdin;
1	Bulbasaur	Grass	\N
2	Ivysaur	Grass	1
3	Venasaur	Grass	2
4	Charmander	Fire	\N
5	Charmeleon	Fire	4
6	Charizard	Fire	5
7	Squirtle	Water	\N
8	Wartortle	Water	7
9	Blastoise	Water	8
10	Caterpie	Bug	\N
11	Metapod	Bug	10
12	Butterfree	Bug	11
\.


--
-- Data for Name: trainers; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.trainers (id, name, isgymleader, pokemonslot1, pokemonslot2, pokemonslot3, pokemonslot4, pokemonslot5, pokemonslot6) FROM stdin;
1	Ash	f	1	10	\N	\N	\N	\N
2	Misty	t	7	\N	\N	\N	\N	\N
3	Brock	t	3	6	9	\N	\N	\N
4	Axle	t	2	4	8	\N	\N	\N
5	Moxie	f	1	\N	9	9	9	9
\.


--
-- PostgreSQL database dump complete
--

