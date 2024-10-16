! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f7cc0335-a47d-4c25-bcd8-fffa7518e903", e._sentryDebugIdIdentifier = "sentry-dbid-f7cc0335-a47d-4c25-bcd8-fffa7518e903")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2053], {
        24297: function(e, r, s) {
            "use strict";
            s.d(r, {
                BI: function() {
                    return l
                },
                Bq: function() {
                    return u
                },
                Ip: function() {
                    return p
                },
                Mt: function() {
                    return y
                },
                NF: function() {
                    return o
                },
                Qc: function() {
                    return d
                },
                al: function() {
                    return a
                },
                ez: function() {
                    return h
                },
                on: function() {
                    return c
                },
                rj: function() {
                    return g
                },
                u5: function() {
                    return S
                }
            });
            var t = s(16156),
                n = s(38556);
            let i = `${n.D.API_ENDPOINT}/oto/`;
            class a {
                constructor() {}
                async createChat(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.CreateChat", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createChatMessage(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.CreateChatMessage", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createChatUsers(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.CreateChatUsers", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteChat(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.DeleteChat", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteChatMessage(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.DeleteChatMessage", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteChatUsers(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.DeleteChatUsers", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async findChatWithParticipatingUserIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.FindChatWithParticipatingUserIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getChat(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.GetChat", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getUnreadChatCount(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.GetUnreadChatCount", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listChatFiles(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.ListChatFiles", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listChatMessages(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.ListChatMessages", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listChats(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.ListChats", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async markChatAsHidden(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.MarkChatAsHidden", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateChat(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.UpdateChat", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateChatUserViewedAt(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ChatService.UpdateChatUserViewedAt", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class o {
                constructor() {}
                async addContent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.AddContent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async create(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.Create", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async delete(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.Delete", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async get(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.Get", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getByCode(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.GetByCode", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async list(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.List", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listByIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListByIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listBySchool(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListBySchool", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listBySubjectID(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListBySubjectID", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listCentralContentForCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListCentralContentForCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listCourseCentralContentsByIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListCourseCentralContentsByIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listCourseLicensesByUsers(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListCourseLicensesByUsers", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listCourseLicensesForOrganizationByUsers(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.ListCourseLicensesForOrganizationByUsers", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async removeContent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.RemoveContent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async setCourseLicenseForOrganization(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.SetCourseLicenseForOrganization", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async setForSchool(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.SetForSchool", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async update(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.Update", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateContent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "CourseService.UpdateContent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class l {
                constructor() {}
                async create(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.Create", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createEntryAsMentor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.CreateEntryAsMentor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async delete(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.Delete", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteEntryAsMentor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.DeleteEntryAsMentor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getByID(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.GetByID", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listEntriesForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.ListEntriesForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listEntriesForUserAsMentor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.ListEntriesForUserAsMentor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listForSchool(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.ListForSchool", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async update(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.Update", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateEntryAsMentor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.UpdateEntryAsMentor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async upsertEntryAsStudentGuardian(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "DevelopmentTalkService.UpsertEntryAsStudentGuardian", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class p {
                constructor() {}
                async create(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new FormData,
                        n = e.file;
                    return n && (s.append(n?.name, n), e.file = {
                        name: n?.name
                    }), s.append("body", JSON.stringify(e)), t.Z.post(i + "FileService.Create", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createProfileImage(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new FormData,
                        n = e.file;
                    return n && (s.append(n?.name, n), e.file = {
                        name: n?.name
                    }), s.append("body", JSON.stringify(e)), t.Z.post(i + "FileService.CreateProfileImage", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createProfileImageUploadURL() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = await t.Z.post(i + "FileService.CreateProfileImageUploadURL", JSON.stringify({}), {
                            signal: r?.signal,
                            suppressError: r?.suppressError
                        }),
                        n = new FormData,
                        a = e.file;
                    return a && n.append(a?.name, a), t.Z.put(s.url, n, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    }), s
                }
                async imageZipProcessing(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "FileService.ImageZipProcessing", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFileProfileImageJobs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "FileService.ListFileProfileImageJobs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class g {
                constructor() {}
                async download(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GalleryService.Download", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async list(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GalleryService.List", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async random(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GalleryService.Random", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async search(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GalleryService.Search", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class u {
                constructor() {}
                async callback(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.Callback", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async connect(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.Connect", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createFile(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.CreateFile", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteFile(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.DeleteFile", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteServiceAccount(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.DeleteServiceAccount", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getFile(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.GetFile", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async hasServiceAccount(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.HasServiceAccount", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFilesByIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.ListFilesByIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFilesForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.ListFilesForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFilesPermissionsForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.ListFilesPermissionsForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async transferFileToServiceAccount(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GoogleService.TransferFileToServiceAccount", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class c {
                constructor() {}
                async createGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.CreateGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createGradingPeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.CreateGradingPeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createGradingStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.CreateGradingStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createGradingStudentSubjectWithTwoFactor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.CreateGradingStudentSubjectWithTwoFactor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createGradingSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.CreateGradingSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.DeleteGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteGradingStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.DeleteGradingStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteGradingSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.DeleteGradingSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async exportGradingStudentSubjectOverview(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ExportGradingStudentSubjectOverview", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async exportGradingStudentSubjects(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ExportGradingStudentSubjects", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingCatalogue(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingCatalogue", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingCatalogueByGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingCatalogueByGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingPeriodBySchool(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingPeriodBySchool", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingStudentSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingStudentSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGradingSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GetGradingSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async gradingStudentCalculateAbsence(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GradingStudentCalculateAbsence", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async gradingStudentResetAbsence(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.GradingStudentResetAbsence", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async importGradingStudentSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ImportGradingStudentSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingCatalogues(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingCatalogues", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingGroups(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingGroups", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingGroupsAggregated(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingGroupsAggregated", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingGroupsSuggestions(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingGroupsSuggestions", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingMeritPoints(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingMeritPoints", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingMeritPointsForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingMeritPointsForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjectLogs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjectLogs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjectSuggestions(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjectSuggestions", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjects(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjects", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjectsForGrading(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjectsForGrading", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjectsForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjectsForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentSubjectsForUsersInSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentSubjectsForUsersInSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudents(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudents", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingStudentsByUserIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingStudentsByUserIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingSubjectByCourseIDs(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingSubjectByCourseIDs", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGradingSubjects(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ListGradingSubjects", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async resetGradingStudentSubjectWithTwoFactor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.ResetGradingStudentSubjectWithTwoFactor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async signGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.SignGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingPeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingPeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingStudentSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingStudentSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingStudentSubjectWithTwoFactor(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingStudentSubjectWithTwoFactor", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGradingSubject(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpdateGradingSubject", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async upsertGradingStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpsertGradingStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async upsertGradingStudentSubjects(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "GradingService.UpsertGradingStudentSubjects", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class d {
                constructor() {}
                async batchSave(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MealService.BatchSave", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getByTimespan(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MealService.GetByTimespan", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class h {
                constructor() {}
                async changeFeedReadStatus(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ChangeFeedReadStatus", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteFeed(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.DeleteFeed", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteFeedAsCreator(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.DeleteFeedAsCreator", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getMessage(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.GetMessage", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getMessageForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.GetMessageForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listBySchoolID(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ListBySchoolID", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFeedForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ListFeedForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listFeedRecipientsAsCreator(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ListFeedRecipientsAsCreator", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listRecipientsBySchoolID(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ListRecipientsBySchoolID", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listUnreadFeedMessagesMessageIDsForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.ListUnreadFeedMessagesMessageIDsForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async sendFeed(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.SendFeed", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async sendSMS(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.SendSMS", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async sendgridStatusUpdateWebhook(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.SendgridStatusUpdateWebhook", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateFeed(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.UpdateFeed", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateFeedAsCreator(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "MessageService.UpdateFeedAsCreator", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class S {
                constructor() {}
                async copy(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.Copy", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async create(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.Create", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createLesson(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateLesson", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createPeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreatePeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.CreateTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async delete(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.Delete", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteLesson(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteLesson", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deletePeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeletePeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.DeleteTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async get(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.Get", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getLesson(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetLesson", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getPeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetPeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.GetTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async importSkola24(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ImportSkola24", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async list(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.List", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGeneration(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListGeneration", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listLesson(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListLesson", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listLessonsForClass(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListLessonsForClass", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listLessonsForRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListLessonsForRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listPeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListPeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.ListTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async runGeneration(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.RunGeneration", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async update(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.Update", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateCourse(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateCourse", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateLesson(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateLesson", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updatePeriod(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdatePeriod", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateRoom(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateRoom", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "ScheduleService.UpdateTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
            class y {
                constructor() {}
                async copy(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.Copy", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async copyTaskGDriveFilesToSubmission(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.CopyTaskGDriveFilesToSubmission", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async create(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new FormData,
                        n = [];
                    for (let r of e?.files ?? []) s.append(r?.name, r), n.push({
                        name: r?.name
                    });
                    return s.append("body", JSON.stringify({
                        ...e,
                        files: n
                    })), t.Z.post(i + "TaskService.Create", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async createAssessment(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.CreateAssessment", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async delete(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.Delete", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteArchivedTask(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.DeleteArchivedTask", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async deleteSubmission(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.DeleteSubmission", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async get(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.Get", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getArchivedAsStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.GetArchivedAsStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getArchivedAsTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.GetArchivedAsTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getPublished(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.GetPublished", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getTaskByMissingWorkspaceForStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.GetTaskByMissingWorkspaceForStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async getTaskByMissingWorkspaceForTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.GetTaskByMissingWorkspaceForTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listArchivedTasksForStudent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListArchivedTasksForStudent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listArchivedTasksForTeacher(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListArchivedTasksForTeacher", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listAsMemberForWorkspace(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListAsMemberForWorkspace", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listAsModeratorForWorkspace(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListAsModeratorForWorkspace", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listAsModeratorForWorkspaceMember(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListAsModeratorForWorkspaceMember", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listByUserID(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListByUserID", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listPublishedForEvent(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListPublishedForEvent", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listSubmissionStatsForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListSubmissionStatsForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listTaskCalendarForGroup(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListTaskCalendarForGroup", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listTaskCalendarForUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListTaskCalendarForUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listTaskCalendarForUsers(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListTaskCalendarForUsers", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async listTaskStatusesByUser(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.ListTaskStatusesByUser", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async setAssessments(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.SetAssessments", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async typeCreate(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.TypeCreate", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async typeDelete(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.TypeDelete", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async typeList(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.TypeList", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async typeUpdate(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.TypeUpdate", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async update(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new FormData,
                        n = [];
                    for (let r of e?.files ?? []) s.append(r?.name, r), n.push({
                        name: r?.name
                    });
                    return s.append("body", JSON.stringify({
                        ...e,
                        files: n
                    })), t.Z.post(i + "TaskService.Update", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateAssessment(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = JSON.stringify(e);
                    return t.Z.post(i + "TaskService.UpdateAssessment", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
                async updateSubmission(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new FormData,
                        n = [];
                    for (let r of e?.files ?? []) s.append(r?.name, r), n.push({
                        name: r?.name
                    });
                    return s.append("body", JSON.stringify({
                        ...e,
                        files: n
                    })), t.Z.post(i + "TaskService.UpdateSubmission", s, {
                        signal: r?.signal,
                        suppressError: r?.suppressError
                    })
                }
            }
        },
        41608: function(e, r, s) {
            "use strict";
            s.d(r, {
                ZP: function() {
                    return d
                }
            });
            var t = s(27573),
                n = s(71539),
                i = s(7653);
            let a = (0, i.createContext)({
                    floatingStyles: {},
                    refs: null,
                    showFloatingElement: !1,
                    floatingTransitionStyles: {},
                    arrowRef: {
                        current: null
                    },
                    context: null,
                    arrowEnabled: !1,
                    arrowProps: void 0,
                    getReferenceProps: () => ({}),
                    getFloatingProps: () => ({})
                }),
                o = a.Provider,
                l = () => (0, i.useContext)(a);
            var p = s(43533),
                g = s(50725);
            let u = function(e, r, s) {
                let t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    n = e,
                    i = r,
                    a = s.left,
                    o = s.right,
                    l = s.top,
                    p = s.bottom;
                return "number" == typeof t && (a += t, o += t, l += t, p += t), "object" == typeof t && (a += t.left ?? 0, o += t.right ?? 0, l += t.top ?? 0, p += t.bottom ?? 0), a > 0 && (n += a), o > 0 && (n -= o), l > 0 && (i += l), p > 0 && (i -= p), {
                    x: n,
                    y: i
                }
            };
            var c = e => ({
                    name: "overflow",
                    options: e,
                    async fn(r) {
                        let s = await (0, g.US)(r),
                            {
                                x: t,
                                y: n
                            } = u(r.x, r.y, s, e?.padding);
                        return {
                            x: t,
                            y: n
                        }
                    }
                }),
                d = {
                    Root: e => {
                        let {
                            placement: r = "bottom",
                            open: s,
                            onChangeOpen: a,
                            interactions: l = ["click", "dismiss"],
                            children: u,
                            enabled: d = !0,
                            enableTransition: h = !1,
                            clickOptions: S,
                            hoverOptions: y,
                            focusOptions: v,
                            dismissOptions: E,
                            roleOptions: f,
                            middleware: Z = ["shift", "flip", "autoUpdate"],
                            offsetOptions: O,
                            shiftOptions: N,
                            flipOptions: G,
                            arrowOptions: m,
                            sizeOptions: J,
                            autoPlacementOptions: D,
                            hideOptions: C,
                            inlineOptions: w,
                            transitionOptions: k,
                            preventOverflowOptions: F,
                            arrowProps: M,
                            positionMethod: b = "transform"
                        } = e, [T, L] = (0, i.useState)(!1), U = (0, i.useRef)(null), {
                            floatingStyles: I,
                            refs: W,
                            context: j
                        } = (0, n.YF)({
                            placement: r,
                            transform: "transform" === b,
                            open: T,
                            onOpenChange: e => {
                                L(e), a?.(e)
                            },
                            middleware: [...Z.includes("offset") ? [(0, p.cv)(O)] : [], ...Z.includes("shift") ? [(0, p.uY)(N)] : [], ...Z.includes("flip") ? [(0, p.RR)(G)] : [], ...Z.includes("arrow") ? [(0, p.x7)({
                                element: U,
                                ...m
                            })] : [], ...Z.includes("size") ? [(0, p.dp)(J)] : [], ...Z.includes("autoPlacement") ? [(0, p.X5)(D)] : [], ...Z.includes("hide") ? [(0, p.Cp)(C)] : [], ...Z.includes("inline") ? [(0, p.Qo)(w)] : [], ...Z.includes("preventOverflow") ? [c(F)] : []],
                            whileElementsMounted: Z.includes("autoUpdate") ? g.Me : void 0
                        }), A = (0, n.eS)(j, {
                            ...S,
                            enabled: l.includes("click") && d
                        }), H = (0, n.XI)(j, {
                            ...y,
                            enabled: l.includes("hover") && d
                        }), P = (0, n.KK)(j, {
                            ...v,
                            enabled: l.includes("focus") && d
                        }), R = (0, n.bQ)(j, {
                            outsidePressEvent: "click",
                            ...E,
                            enabled: l.includes("dismiss") && d
                        }), B = (0, n.qs)(j, f), {
                            getReferenceProps: x,
                            getFloatingProps: _
                        } = (0, n.NI)([A, H, P, R, B]), {
                            isMounted: Y,
                            styles: $
                        } = (0, n.Y_)(j, k), z = h ? Y : T;
                        return (0, i.useEffect)(() => {
                            void 0 !== s && L(s)
                        }, [s]), (0, t.jsx)(o, {
                            value: {
                                floatingStyles: I,
                                refs: W,
                                showFloatingElement: z,
                                floatingTransitionStyles: h ? $ : {},
                                arrowRef: U,
                                context: j,
                                arrowEnabled: Z.includes("arrow"),
                                arrowProps: M,
                                getReferenceProps: x,
                                getFloatingProps: _
                            },
                            children: u
                        })
                    },
                    Target: (0, i.forwardRef)((e, r) => {
                        let {
                            children: s,
                            targetProps: t
                        } = e, {
                            refs: a,
                            getReferenceProps: o
                        } = l();
                        if (!a?.setReference) throw Error("Target ref is not defined");
                        let p = (0, n.qq)([a.setReference, ...s.ref ? [s.ref] : [], ...r ? [r] : []]);
                        return (0, i.cloneElement)(s, {
                            ref: p,
                            ...o(t)
                        })
                    }),
                    Element: e => {
                        let {
                            children: r,
                            elementProps: s,
                            zIndex: i = 2,
                            enableFocusManager: a = !1
                        } = e, {
                            refs: o,
                            showFloatingElement: p,
                            floatingTransitionStyles: g,
                            arrowRef: u,
                            arrowEnabled: c,
                            arrowProps: d,
                            context: h,
                            getFloatingProps: S,
                            floatingStyles: y
                        } = l();
                        return p && o?.setFloating && h ? (0, t.jsx)(n.ll, {
                            children: (0, t.jsx)(n.wD, {
                                context: h,
                                disabled: !a,
                                children: (0, t.jsxs)("div", {
                                    ref: o.setFloating,
                                    ...S(s),
                                    style: {
                                        ...g,
                                        ...y,
                                        ...s?.style,
                                        zIndex: i
                                    },
                                    children: [r, c ? (0, t.jsx)(n.Y$, {
                                        ref: u,
                                        context: h,
                                        ...d
                                    }) : null]
                                })
                            })
                        }) : null
                    }
                }
        },
        42274: function(e, r, s) {
            "use strict";
            var t = s(27573),
                n = s(45531),
                i = s.n(n),
                a = s(7653),
                o = s(41608),
                l = s(21746),
                p = s.n(l);
            let g = (0, a.forwardRef)((e, r) => {
                let {
                    title: s,
                    description: n,
                    placement: a = "top",
                    disabled: l = !1,
                    destructive: g = !1,
                    children: u,
                    ...c
                } = e, d = matchMedia("(hover: none), (pointer: coarse)").matches;
                return (0, t.jsxs)(o.ZP.Root, {
                    interactions: ["hover"],
                    placement: a,
                    middleware: ["offset", "flip", "arrow", "shift"],
                    offsetOptions: {
                        mainAxis: 5
                    },
                    arrowProps: {
                        className: i()(p().arrow, {
                            [p()["arrow--destructive"]]: g
                        }),
                        height: 4,
                        width: 8
                    },
                    hoverOptions: {
                        delay: {
                            open: 500,
                            close: 0
                        }
                    },
                    enabled: !!(!d && !l),
                    children: [(0, t.jsx)(o.ZP.Target, {
                        targetProps: c,
                        ref: r,
                        children: u
                    }), (0, t.jsx)(o.ZP.Element, {
                        zIndex: 10004,
                        children: (0, t.jsxs)("div", {
                            className: i()(p().tooltip, {
                                [p()["tooltip--destructive"]]: g
                            }),
                            children: [(0, t.jsx)("p", {
                                className: p().tooltip__title,
                                children: s
                            }), n ? (0, t.jsx)("p", {
                                className: p().tooltip__description,
                                children: n
                            }) : null]
                        })
                    })]
                })
            });
            r.Z = g
        },
        69702: function(e, r, s) {
            "use strict";
            var t = s(27573),
                n = s(7653),
                i = s(28650);
            let a = (0, n.forwardRef)((e, r) => {
                let {
                    options: s,
                    to: n,
                    ...a
                } = e, {
                    className: o
                } = a, l = s || {
                    type: n ? "link" : a?.onClick ? "button" : null
                }, p = {
                    WebkitTapHighlightColor: "transparent"
                }, g = "string" == typeof n && n?.includes("mailto:"), u = "string" == typeof n && n?.includes("tel:"), c = "string" == typeof n && n?.includes("blob:"), d = "string" == typeof n && (g || u || /^https?:\/\//.test(n) || /^http?:\/\//.test(n) || c);
                return l?.type === "link" || l?.type === "button" || l?.type === "element" ? (0, t.jsx)(t.Fragment, {
                    children: l?.type === "link" && n ? d ? (0, t.jsx)("a", {
                        ...a,
                        className: o,
                        href: String(n),
                        ...r && {
                            ref: r
                        },
                        rel: "_blank" === a.target ? "noreferrer" : void 0,
                        style: {
                            ...p,
                            ...a?.style
                        }
                    }) : (0, t.jsx)(i.Z, {
                        ...a,
                        className: o,
                        href: n,
                        ...r && {
                            ref: r
                        },
                        style: {
                            ...p,
                            ...a?.style
                        }
                    }) : l?.type === "button" ? (0, t.jsx)("button", {
                        ...a,
                        type: a.type ?? "button",
                        className: o,
                        ...r && {
                            ref: r
                        },
                        style: {
                            ...p,
                            ...a?.style
                        }
                    }) : l?.type === "element" ? (0, t.jsx)("div", {
                        ...a,
                        ...r && {
                            ref: r
                        },
                        style: {
                            ...p,
                            ...a?.style
                        },
                        tabIndex: 0,
                        className: o,
                        role: "button",
                        children: a.children
                    }) : (0, t.jsx)(t.Fragment, {})
                }) : (0, t.jsx)("div", {
                    ...a,
                    className: a.className,
                    onClick: void 0,
                    onKeyDown: void 0,
                    ...r && {
                        ref: r
                    },
                    style: {
                        ...p,
                        ...a?.style
                    },
                    children: a.children
                })
            });
            r.Z = a
        },
        12157: function(e, r, s) {
            "use strict";
            s.d(r, {
                Z: function() {
                    return ey
                }
            });
            var t = s(92575),
                n = s(27227),
                i = s(93624),
                a = s(43919),
                o = s(99010),
                l = s(31571),
                p = s(83372),
                g = s(14946),
                u = s(18740),
                c = s(696),
                d = s(91254),
                h = s(10284),
                S = s(21730),
                y = s(18855),
                v = s(71014),
                E = s(50214),
                f = s(62622),
                Z = s(85131),
                O = s(50440),
                N = s(56649),
                G = s(20316),
                m = s(45456),
                J = s(72309),
                D = s(79931),
                C = s(99685),
                w = s(36670),
                k = s(49042),
                F = s(52432),
                M = s(57681),
                b = s(68214),
                T = s(72327),
                L = s(56578),
                U = s(63041),
                I = s(63074),
                W = s(41263),
                j = s(51802),
                A = s(84502),
                H = s(46571),
                P = s(9868),
                R = s(75512),
                B = s(92395),
                x = s(52075),
                _ = s(71191),
                Y = s(89765),
                $ = s(41557),
                z = s(42405),
                q = s(58704),
                X = s(99026),
                V = s(24144),
                K = s(77781),
                Q = s(79067),
                ee = s(58271),
                er = s(7450),
                es = s(13583),
                et = s(12361),
                en = s(18653),
                ei = s(26704),
                ea = s(67983),
                eo = s(95804),
                el = s(69761),
                ep = s(80328),
                eg = s(92728),
                eu = s(77783),
                ec = s(91668),
                ed = s(92399),
                eh = s(99820);
            let eS = {
                sv: ed.Z,
                en: eh.Z
            };
            class ey {
                static getCurrentLocale() {
                    return eS[t.ag.language || "sv"]
                }
                static formatHelper(e, r) {
                    return (0, n.Z)(this.parse(e), r, {
                        locale: this.getCurrentLocale(),
                        useAdditionalWeekYearTokens: !0,
                        weekStartsOn: 1
                    })
                }
                static formatInTimeZone(e, r) {
                    let s = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    return (0, eg.Z)(e, s, r, {
                        locale: this.getCurrentLocale(),
                        weekStartsOn: 1
                    })
                }
                static parse(e) {
                    return "string" == typeof e ? (0, i.Z)(e) : "number" == typeof e ? new Date(1e3 * e) : e
                }
                static parseJSON(e) {
                    return (0, a.Z)(e)
                }
                static parseInFormat(e, r) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date;
                    return (0, o.Z)(e, r, s, {
                        weekStartsOn: 1
                    })
                }
                static getUTC() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = this.parse(e);
                    return (0, eu.Z)((0, ec.Z)(r, "UTC"), "yyyy-MM-dd'T'HH:mm:ssXXXX", {
                        timeZone: "UTC",
                        weekStartsOn: 1
                    })
                }
                static getUnix() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, l.Z)(this.parse(e))
                }
                static getISO() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yyyy-MM-dd")
                }
                static getISOMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yyyy-MM")
                }
                static getISOYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yyyy")
                }
                static getISOWeek() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "YYYY'-W'ww")
                }
                static getISOHour() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "HH:mm")
                }
                static getFullISO() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yyyy-MM-dd'T'HH:mm")
                }
                static getYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yy")
                }
                static getFullYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "yyyy")
                }
                static getMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "M")
                }
                static getFullMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "MM")
                }
                static getDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "d")
                }
                static getFullDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "dd")
                }
                static getDaySuffix() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "do")
                }
                static getDayname() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "EEEE")
                }
                static getDaynameShort() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "EEE")
                }
                static getWeekday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "e")
                }
                static getMonthname() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "MMMM")
                }
                static getMonthnameShort() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "MMM")
                }
                static getHour() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "H")
                }
                static getFullHour() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "HH")
                }
                static getMinute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "m")
                }
                static getFullMinute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "mm")
                }
                static getSecond() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "s")
                }
                static getFullSecond() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "ss")
                }
                static getMillisecondTimestamp() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "T")
                }
                static getWeek() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "w")
                }
                static getMonthWeeks() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = (0, p.Z)(this.parse(e)),
                        s = (0, g.Z)(this.parse(e), {
                            weekStartsOn: 1
                        }),
                        t = [];
                    for (let e = 0; e < s; e++) {
                        let s = (0, u.Z)(r, e);
                        t.push(this.getISOWeek(s))
                    }
                    return t
                }
                static getMonthWeeksEven() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = (0, p.Z)(this.parse(e)),
                        s = (0, g.Z)(this.parse(e), {
                            weekStartsOn: 1
                        }),
                        t = [];
                    for (let e = 0; e < s; e++) {
                        let s = (0, u.Z)(r, e);
                        t.push(this.getISOWeek(s))
                    }
                    for (; t?.length < 6;) {
                        let e = t?.[t?.length - 1];
                        e && t.push(this.incrementISOWeek(e))
                    }
                    return t
                }
                static getMonthWeeksWithoutDuplicates() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = this.getMonthWeeksEven(e),
                        s = this.getISOMonth(this.parse(e));
                    return r.filter(e => {
                        let r = ey.getISOWeekdays(e)[0];
                        return ey.getISOMonth(r) === s
                    })
                }
                static getWeekdays() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = (0, c.Z)(this.parse(e), {
                            weekStartsOn: 1
                        }),
                        s = [];
                    for (let e = 0; e < 7; e++) {
                        let t = (0, d.Z)(r, e);
                        s.push(this.getISO(t))
                    }
                    return s
                }
                static firstWeekOfMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.getISOWeek(this.startOfMonth(e))
                }
                static lastWeekOfMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.getISOWeek(this.endOfMonth(e))
                }
                static getReadable() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "do MMM yyyy")
                }
                static getReadableWithTime() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return this.formatHelper(e, "do MMM yyyy HH:mm")
                }
                static startOfWeek() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, c.Z)(this.parse(e), {
                        weekStartsOn: 1
                    })
                }
                static endOfWeek() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, h.Z)(this.parse(e), {
                        weekStartsOn: 1
                    })
                }
                static startOfMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, p.Z)(this.parse(e))
                }
                static endOfMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, S.Z)(this.parse(e))
                }
                static startOfYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, y.Z)(this.parse(e))
                }
                static endOfYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, v.Z)(this.parse(e))
                }
                static getTimeDistance(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, E.Z)(this.parse(e), this.parse(r), {
                        locale: this.getCurrentLocale()
                    })
                }
                static getTimeDistanceSuffix(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, E.Z)(this.parse(e), this.parse(r), {
                        locale: this.getCurrentLocale(),
                        addSuffix: !0
                    })
                }
                static getDurationBetweenDates(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, f.Z)((0, Z.Z)({
                        start: this.parse(e),
                        end: this.parse(r)
                    }), {
                        locale: this.getCurrentLocale()
                    })
                }
                static getTimeRelative(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, O.Z)(this.parse(e), this.parse(r), {
                        locale: this.getCurrentLocale(),
                        weekStartsOn: 1
                    })
                }
                static getChatTimeRelative(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return 6 > Math.abs(this.getDiffDays(e, r)) ? this.getTimeRelative(e, r) : this.formatHelper(e, "d MMMM HH:mm")
                }
                static getMinutesBetweenDates(e, r) {
                    return (0, N.Z)(this.parse(r), this.parse(e), {
                        roundingMethod: "ceil"
                    })
                }
                static getDiffDays(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, G.Z)(this.parse(r), this.parse(e))
                }
                static startOfDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, m.Z)(this.parse(e))
                }
                static endOfDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, J.Z)(this.parse(e))
                }
                static getDaysWithinSpan(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                        s = Math.abs((0, D.Z)(this.parse(e), this.parse(r))),
                        t = [];
                    for (let r = 0; r <= s; r++) t.push(this.incrementDay(this.getISO(e), r));
                    return t
                }
                static getWeeksWithinSpan(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                        s = Math.abs((0, C.Z)(this.parse(e), this.parse(r))),
                        t = [];
                    for (let r = 0; r <= s; r++) t.push(this.incrementISOWeek(this.getISOWeek(e), r));
                    return t
                }
                static getMonthsWithinSpan(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                        s = Math.abs((0, w.Z)(this.parse(e), this.parse(r))),
                        t = [];
                    for (let r = 0; r <= s; r++) t.push(this.incrementMonth(this.getUnix(e), r));
                    return t
                }
                static getYearsWithinSpan(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date,
                        s = Math.abs((0, k.Z)(this.parse(e), this.parse(r))),
                        t = [];
                    for (let r = 0; r <= s; r++) t.push(this.getFullYear(this.incrementYear(this.getUnix(e), r)));
                    return t
                }
                static sameDay(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, F.Z)(this.parse(e), this.parse(r))
                }
                static sameWeek(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, M.Z)(this.parse(e), this.parse(r), {
                        weekStartsOn: 1
                    })
                }
                static sameMonth(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, b.Z)(this.parse(e), this.parse(r))
                }
                static before(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, T.Z)(this.parse(e), this.parse(r))
                }
                static after(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, L.Z)(this.parse(e), this.parse(r))
                }
                static isEqual(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    return (0, U.Z)(this.getUnix(e), this.getUnix(r))
                }
                static withinSpan(e, r) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date,
                        t = {
                            start: this.parse(e),
                            end: this.parse(r)
                        };
                    return (0, I.Z)(this.parse(s), t)
                }
                static intervalsOverlapping(e, r, s, t) {
                    let n = {
                            start: this.parse(e),
                            end: this.parse(r)
                        },
                        i = {
                            start: this.parse(s),
                            end: this.parse(t)
                        };
                    return (0, W.Z)(n, i)
                }
                static withinWeek(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = {
                            start: this.parse(this.getISO()),
                            end: (0, u.Z)(this.parse(this.getISO()), r)
                        };
                    return (0, I.Z)(this.parse(this.getISO(e)), s)
                }
                static isMonday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, j.Z)(this.parse(e))
                }
                static isTuesday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, A.Z)(this.parse(e))
                }
                static isWednesday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, H.Z)(this.parse(e))
                }
                static isThursday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, P.Z)(this.parse(e))
                }
                static isFriday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, R.Z)(this.parse(e))
                }
                static isSaturday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, B.Z)(this.parse(e))
                }
                static isSunday() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                    return (0, x.Z)(this.parse(e))
                }
                static isValid(e) {
                    return !!e && (0, _.Z)(this.parse(e))
                }
                static isTimeValid(e) {
                    if (5 !== e.length) return !1;
                    let [r, s] = e.split(":");
                    if (r?.length !== 2 || s?.length !== 2) return !1;
                    let t = parseInt(r, 10),
                        n = parseInt(s, 10);
                    return !(isNaN(t) || isNaN(n)) && t >= 0 && t <= 23 && n >= 0 && n <= 59
                }
                static isISOWeekValid(e) {
                    if (e?.length !== 8) return !1;
                    let [r, s] = e.split("-");
                    if (!(r && s) || 3 !== s.length || !s.startsWith("W")) return !1;
                    let t = parseInt(s.substring(1), 10);
                    if (isNaN(t) || t < 1 || t > 53) return !1;
                    let n = parseInt(r, 10);
                    return !isNaN(n) && !(n < 0)
                }
                static parseISOWeek(e) {
                    let r = new Date,
                        s = e.split(/[W,-]+/),
                        t = Number(s[0]),
                        n = Number(s[1]);
                    return r = (0, Y.Z)(r, t), r = (0, $.Z)(r, n)
                }
                static setISOWeek(e, r) {
                    return (0, $.Z)(this.parse(e), r)
                }
                static incrementISOWeek(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = this.parseISOWeek(e);
                    return s = (0, u.Z)(s, r), this.getISOWeek(s)
                }
                static decrementISOWeek(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = this.parseISOWeek(e);
                    return s = (0, z.Z)(s, r), this.getISOWeek(s)
                }
                static getISOWeekdays(e, r) {
                    let s = this.parseISOWeek(e),
                        t = [];
                    return this.getWeekdays(s).forEach((e, s) => {
                        if (!r) {
                            t.push(e);
                            return
                        }
                        r.includes(s) && t.push(e)
                    }), t
                }
                static incrementDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return this.getISO((0, d.Z)(this.parse(e), r))
                }
                static decrementDay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return this.getISO((0, q.Z)(this.parse(e), r))
                }
                static incrementMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return this.getISOMonth((0, X.Z)(this.parse(e), r))
                }
                static decrementMonth() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return this.getISOMonth((0, V.Z)(this.parse(e), r))
                }
                static incrementYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, K.Z)(this.parse(e), r)
                }
                static decrementYear() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, Q.Z)(this.parse(e), r)
                }
                static incrementMinutes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, ee.Z)(this.parse(e), r)
                }
                static decrementMinutes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, er.Z)(this.parse(e), r)
                }
                static incrementHours() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, es.Z)(this.parse(e), r)
                }
                static decrementHours() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (0, et.Z)(this.parse(e), r)
                }
                static set(e, r) {
                    return (0, en.Z)(this.parse(e), r)
                }
                static setDay(e, r) {
                    return (0, ei.Z)(this.parse(e), r + 1, {
                        weekStartsOn: 1
                    })
                }
                static setWeek(e, r) {
                    return (0, ea.Z)(this.parse(e), r - 1, {
                        weekStartsOn: 1
                    })
                }
                static setMonth(e, r) {
                    return (0, eo.Z)(this.parse(e), r - 1)
                }
                static setYear(e, r) {
                    return (0, el.Z)(this.parse(e), r - 1)
                }
                static getHours() {
                    let e = [];
                    for (let r = 0; r < 24; r++) {
                        let s = String(r),
                            t = 1 === s.length ? `0${s}` : s;
                        e.push(t)
                    }
                    return e
                }
                static getMinutes() {
                    let e = [];
                    for (let r = 0; r < 60; r++) {
                        let s = String(r),
                            t = 1 === s.length ? `0${s}` : s;
                        e.push(t)
                    }
                    return e
                }
                static getFiveMinutes() {
                    let e = [];
                    for (let r = 0; r < 12; r++) {
                        let s = String(5 * r),
                            t = 1 === s.length ? `0${s}` : s;
                        e.push(t)
                    }
                    return e
                }
                static roundMinutes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                        s = 6e4 * r;
                    return new Date(Math.round(e.getTime() / s) * s)
                }
                static dateReadableWithTime(e, r) {
                    return `${ey.getReadable(e)} ${r(t.ZT.Common.ClockTime).toLowerCase()} ${ey.getISOHour(e)}`
                }
                static combine(e, r) {
                    return `${e}T${r}`
                }
                static isoHourToMinutes(e) {
                    let [r = 0, s = 0] = e.split(":").map(Number);
                    return 60 * r + s
                }
                static getDifferenceInCalenderWeeks(e, r) {
                    return (0, ep.Z)(this.parse(r), this.parse(e))
                }
                static isoWeekToYearAndWeek(e) {
                    return {
                        year: Number(e.split("-")[0]),
                        week: Number(e.split("-")[1]?.replace("W", ""))
                    }
                }
            }
        },
        21746: function(e) {
            e.exports = {
                tooltip: "style_tooltip__7kOkx",
                tooltip__title: "style_tooltip__title__NuRik",
                tooltip__description: "style_tooltip__description__YAfP5",
                "tooltip--destructive": "style_tooltip--destructive__RAD0a",
                arrow: "style_arrow__vZDtq",
                "arrow--destructive": "style_arrow--destructive__vyuFz"
            }
        }
    }
]);
